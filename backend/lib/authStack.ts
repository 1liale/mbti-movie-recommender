import { CfnOutput, Stack } from 'aws-cdk-lib'
import {
	AccountRecovery,
	UserPool,
	UserPoolClient,
	VerificationEmailStyle,
} from 'aws-cdk-lib/aws-cognito'
import { Construct } from 'constructs'

export class AuthStack extends Stack {
	public readonly userpool: UserPool
	constructor(scope: Construct, id: string) {
		super(scope, id)

		const userPool = new UserPool(this, `MbtiMovieUserPool`, {
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
		})

		const userPoolClient = new UserPoolClient(
			this,
			`MbtiMoviesUserPoolClient`,
			{
				userPool,
			}
		)

		this.userpool = userPool

		// logging in cdk
		new CfnOutput(this, 'UserPoolId', {
			value: userPool.userPoolId,
		})

		new CfnOutput(this, 'UserPoolClientId', {
			value: userPoolClient.userPoolClientId,
		})
	}
}
