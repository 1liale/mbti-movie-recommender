import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib'
import {
	AccountRecovery,
	OAuthScope,
	UserPool,
	UserPoolClient,
	VerificationEmailStyle,
} from 'aws-cdk-lib/aws-cognito'

import { Construct } from 'constructs'

interface AuthStackProps extends StackProps {}

export class AuthStack extends Stack {
	public readonly userpool: UserPool
	public readonly userPoolClient: UserPoolClient

	constructor(scope: Construct, id: string, props: AuthStackProps) {
		super(scope, id, props)

		const userPool = new UserPool(this, `MBTIMoviesUserpool`, {
			selfSignUpEnabled: true,
			accountRecovery: AccountRecovery.PHONE_AND_EMAIL,
			userVerification: {
				emailStyle: VerificationEmailStyle.CODE,
			},
			autoVerify: {
				email: true,
			},
			standardAttributes: {
				email: {
					required: true,
					mutable: true,
				},
			},
		});

		userPool.addDomain("default", {
			cognitoDomain: {
				domainPrefix: "mbti-movies-recommender"
			}
		})

		const userPoolClient = new UserPoolClient(this, `MTBIMoviesUserpoolClient`, {
			userPool,
			// user pool client configurations
			generateSecret: false,
			oAuth: {
				flows: {
					authorizationCodeGrant: true,
					implicitCodeGrant: true,
				},
				scopes: [OAuthScope.EMAIL, OAuthScope.OPENID, OAuthScope.PROFILE],
				callbackUrls: [
					`https://example.com`,
					`http://localhost:5173`,
					`http://localhost:5174`,
				]
			}
		})

		this.userpool = userPool
		this.userPoolClient = userPoolClient

		// Outputs UserPoolId and UserPoolClientIds into the console at deploy time
		new CfnOutput(this, 'UserPoolId', {
			value: userPool.userPoolId,
		})
		new CfnOutput(this, 'UserPoolClientId', {
			value: userPoolClient.userPoolClientId,
		})
	}
}