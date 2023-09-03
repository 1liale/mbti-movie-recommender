import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib'
import { AppsyncFunction, AuthorizationType, Code, FunctionRuntime, GraphqlApi, SchemaFile } from 'aws-cdk-lib/aws-appsync';
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

		// MongoDB API Datasource
		const mongoDBApiDatasrc = api.addHttpDataSource(
			'mongoDBAtlasCluster',
			'https://data.mongodb-api.com'
		);

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