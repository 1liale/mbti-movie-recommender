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

		const userPoolDomain = userPool.addDomain("default", {
			cognitoDomain: {
				domainPrefix: "mbti-movies-recommender"
			}
		})

		const userPoolClient = new UserPoolClient(this, `MTBIMoviesUserpoolClient`, {
			userPool,
			// user pool client configurations
			generateSecret: false, // IMPORTANT: must be false, sdk doesn't support app clients with secrets
			oAuth: {
				flows: {
					authorizationCodeGrant: true,
					implicitCodeGrant: false,
					clientCredentials: false,
				},
				scopes: [OAuthScope.EMAIL, OAuthScope.OPENID],
				callbackUrls: [
					`http://localhost:5173/auth/login`,
				],
				logoutUrls: [
					`http://localhost:5173`
				]
			},
		})

		this.userpool = userPool
		this.userPoolClient = userPoolClient

		new CfnOutput(this, 'UserPoolId', {
			value: userPool.userPoolId,
		})
		new CfnOutput(this, 'UserPoolDomain', {
			value: `https://${userPoolDomain.domainName}.auth.us-east-1.amazoncognito.com`
		})
		new CfnOutput(this, 'UserPoolClientId', {
			value: userPoolClient.userPoolClientId,
		})
	}
}