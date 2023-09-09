#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AuthStack } from '../lib/authStack';
import { AppsyncMongoAPIStack } from '../lib/apiStack';

const app = new cdk.App();
new AuthStack(app, 'AuthStack');
new AppsyncMongoAPIStack(app, 'AppsyncMongoAPIStack', {
	MONGO_SECRET_ARN: `arn:aws:secretsmanager:${process.env.CDK_DEFAULT_REGION}:${process.env.CDK_DEFAULT_ACCOUNT}:secret:APPSYNC_MONGO_API_KEY-cpVjih`,
});

app.synth();