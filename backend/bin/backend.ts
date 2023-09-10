#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppsyncMongoAPIStack } from '../lib/APIDatabaseStack';
import { IdentityStack } from '../lib/IdentityStack';
import { AuthStack } from '../lib/AuthStack';
import { AmplifyHostingStack } from '../lib/SvelteHostingStack';


const app = new cdk.App();

// Authenticates principal against a UserPool
const authStack = new AuthStack(app, 'AuthStack', {}); 

// Assesses agent's authorization level to provide access-control
const identityStack = new IdentityStack(app, 'IdentityStack', {
	userpool: authStack.userpool,
	userpoolClient: authStack.userPoolClient
});

// Provisions Appsync GraphQL and integration with MongoDB database
const apiStack = new AppsyncMongoAPIStack(app, 'AppsyncMongoAPIStack', {
	userpool: authStack.userpool,
	unauthenticatedRole: identityStack.unauthenticatedRole,
	identityPool: identityStack.identityPool,
	MONGO_SECRET_ARN: `arn:aws:secretsmanager:${process.env.CDK_DEFAULT_REGION}:${process.env.CDK_DEFAULT_ACCOUNT}:secret:APPSYNC_MONGO_API_KEY-cpVjih`,
});

new AmplifyHostingStack(
	app,
	'AmplifyHostingStack',
	{
		githubOauthTokenName: 'github-token',
		owner: '1liale',
		repository: 'mbti-movie-recommender',
		envVariables: {
			USERPOOL_ID: authStack.userpool.userPoolId,
			USERPOOL_CLIENTID: authStack.userPoolClient.userPoolClientId,
			IDENTITYPOOL_ID: identityStack.identityPool.identityPoolId,
			APPSYNC_REGION:"us-east-1",
			APPSYNC_API_ID:apiStack.apiId,
			APPSYNC_API_KEY:apiStack.apiKey,
			APPSYNC_GRAPHQL_URL: apiStack.graphqlURL,
		},
	}
)

app.synth();