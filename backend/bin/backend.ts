#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AppsyncMongoAPIStack } from '../lib/APIDatabaseStack';
import { IdentityStack } from '../lib/IdentityStack';
import { AuthStack } from '../lib/AuthStack';

const app = new cdk.App();

// Authenticates principal against a UserPool
const authStack = new AuthStack(app, 'AuthStack', {}); 

// Assesses agent's authorization level to provide access-control
const identityStack = new IdentityStack(app, 'IdentityStack', {
	userpool: authStack.userpool,
	userpoolClient: authStack.userPoolClient
});

// Provisions Appsync GraphQL and integration with MongoDB database
new AppsyncMongoAPIStack(app, 'AppsyncMongoAPIStack', {
	userpool: authStack.userpool,
	unauthenticatedRole: identityStack.unauthenticatedRole,
	identityPool: identityStack.identityPool,
	MONGO_SECRET_ARN: `arn:aws:secretsmanager:${process.env.CDK_DEFAULT_REGION}:${process.env.CDK_DEFAULT_ACCOUNT}:secret:APPSYNC_MONGO_API_KEY-cpVjih`,
});

app.synth();