import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib'
import { AppsyncFunction, AuthorizationType, Code, FunctionRuntime, GraphqlApi, Resolver, SchemaFile } from 'aws-cdk-lib/aws-appsync';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { join } from 'path';

interface AppsyncMongoAPIStackProps extends StackProps {
	MONGO_SECRET_ARN: string;
}

export class AppsyncMongoAPIStack extends Stack {
	constructor(scope: Construct, id: string, props: AppsyncMongoAPIStackProps) {
		super(scope, id, props);

		// Create Appsync GraphQL Api
		const api = new GraphqlApi(this, 'GraphqlApi', {
			name: "GraphqlApi",
			schema: SchemaFile.fromAsset(
				join(__dirname, '/graphql/schema.graphql')
			),
			authorizationConfig: {
				defaultAuthorization: {
					authorizationType: AuthorizationType.API_KEY,
				},
			},
		});

		// Secrets Manager Datasource
		const SMDatasrc = api.addHttpDataSource(
			'secretsManager',
			`https://secretsmanager.${process.env.CDK_DEFAULT_REGION}.amazonaws.com`,
			{
				authorizationConfig: {
					signingRegion: `${process.env.CDK_DEFAULT_REGION}`,
					signingServiceName: 'secretsmanager',
				},
			}
		);

		// Attach a policy to allow http datasource to fetch a secret from AWS SM
		SMDatasrc.grantPrincipal.addToPrincipalPolicy(
			new PolicyStatement({
				resources: [props.MONGO_SECRET_ARN],
				actions: ['secretsmanager:GetSecretValue']
			})
		);

		// MongoDB API Datasource
		const mongoDBAtlasDatasrc = api.addHttpDataSource(
			'mongoDBAtlasCluster',
			'https://data.mongodb-api.com'
		);

		// Function to get the secret
		const getMongoSecretFunc = new AppsyncFunction(
			this,
			'getMongoSecretFunc',
			{
				api,
				dataSource: SMDatasrc,
				name: 'getMongoSecretFromSM',
				code: Code.fromAsset(
					join(__dirname, '/graphql/mappings/getMongoSecret.js')
				),
				runtime: FunctionRuntime.JS_1_0_0,
			}
		)

		// Function to list all movies from MongoDB
		const listAllMoviesFunction = new AppsyncFunction(
			this,
			'listAllMoviesFunction',
			{
				api,
				dataSource: mongoDBAtlasDatasrc,
				name: 'listAllMoviesFunction',
				code: Code.fromAsset(
					join(__dirname, '/graphql/mappings/resolvers/listAllMovies.js')
				),
				runtime: FunctionRuntime.JS_1_0_0
			}
		);

		// Function to insert a movie into MongoDB
		const insertMovieFunction = new AppsyncFunction(
			this,
			'insertMovieFunction',
			{
				api,
				dataSource: mongoDBAtlasDatasrc,
				name: 'insertMovie',
				code: Code.fromAsset(
					join(__dirname, '/graphql/mappings/resolvers/insertMovie.js')
				),
				runtime: FunctionRuntime.JS_1_0_0
			}
		);

		// Pipeline for listAllMovies function (gets mongodb secrets first)
		const listAllMoviesPipelineResolver = new Resolver(
			this,
			'listAllMoviesPipelineResolver',
			{
				api,
				typeName: 'Query',
				fieldName: 'listAllMovies',
				runtime: FunctionRuntime.JS_1_0_0,
				code: Code.fromAsset(
					join(__dirname, '/graphql/mappings/pipeline.js')
				),
				pipelineConfig: [getMongoSecretFunc, listAllMoviesFunction],
			}
		)

		// Pipeline for insertMovie function (gets mongodb secrets first)
		const insertMoviePipelineResolver = new Resolver(
			this,
			'insertMoviePipelineResolver',
			{
				api,
				typeName: 'Mutation',
				fieldName: 'insertMovie',
				runtime: FunctionRuntime.JS_1_0_0,
				code: Code.fromAsset(
					join(__dirname, '/graphql/mappings/pipeline.js')
				),
				pipelineConfig: [getMongoSecretFunc, insertMovieFunction],
			}
		)


		new CfnOutput(this, 'appsync api key', {
			value: api.apiKey!,
		});

		new CfnOutput(this, 'appsync endpoint', {
			value: api.graphqlUrl,
		});

		new CfnOutput(this, 'appsync apiId', {
			value: api.apiId,
		});
	}
}