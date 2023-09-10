import { CfnOutput, SecretValue, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import {
	App,
	GitHubSourceCodeProvider,
	RedirectStatus,
} from '@aws-cdk/aws-amplify-alpha';
import { CfnApp } from 'aws-cdk-lib/aws-amplify';

interface HostingStackProps extends StackProps {
	readonly owner: string
	readonly repository: string
	readonly githubOauthTokenName: string
	readonly envVariables?: { [name: string]: string }
}

export class AmplifyHostingStack extends Stack {
	constructor(scope: Construct, id: string, props: HostingStackProps) {
		super(scope, id, props)
		const amplifyApp = new App(this, 'MBTIMovieAmplifyApp', {
			appName: 'MBTIMoviesApp',
			sourceCodeProvider: new GitHubSourceCodeProvider({
				owner: props.owner,
				repository: props.repository,
				oauthToken: SecretValue.secretsManager(props.githubOauthTokenName),
			}),
			autoBranchDeletion: true,
			customRules: [
				{
					source: '/<*>',
					target: '	/index.html',
					status: RedirectStatus.NOT_FOUND_REWRITE,
				},
			],
			environmentVariables: props.envVariables,
			buildSpec: codebuild.BuildSpec.fromObjectToYaml({
				version: 1,
				frontend: {
					phases: {
						preBuild: {
							commands: [
								'cd frontend',
								'npx pnpm install'
							],
						},
						build: {
							commands: [
								'USERPOOL_ID=$USERPOOL_ID',
								'USERPOOL_CLIENTID=$USERPOOL_CLIENTID',
								'IDENTITYPOOL_ID=$IDENTITYPOOL_ID',
								'APPSYNC_AUTHENTICATION_TYPE=$APPSYNC_AUTHENTICATION_TYPE',
								'APPSYNC_REGION=$APPSYNC_REGION',
								'APPSYNC_API_ID=$APPSYNC_API_ID',
								'APPSYNC_API_KEY=$APPSYNC_API_KEY',
								'APPSYNC_GRAPHQL_URL=$APPSYNC_GRAPHQL_URL',
								'npx pnpm build'
							],
						},
					},
					artifacts: {
						baseDirectory: 'build/',
						files: ['**/*'],
					},
					cache: {
						paths: ['node_modules/**/*'],
					},
				},
			}),
		})

		amplifyApp.addBranch('main', {
			stage: 'PRODUCTION',
		})

		amplifyApp.addBranch('dev', {
			stage: 'PRODUCTION',
		})

		new CfnOutput(this, 'appId', {
			value: amplifyApp.appId,
		})
	}
}
