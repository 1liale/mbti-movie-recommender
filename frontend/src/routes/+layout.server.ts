import {
	APPSYNC_REGION,
	IDENTITYPOOL_ID,
	APPSYNC_GRAPHQL_URL,
	APPSYNC_AUTHENTICATION_TYPE,
	USERPOOL_ID,
	USERPOOL_CLIENTID,
	COGNITO_DOMAIN
} from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import { Amplify } from 'aws-amplify';

// see https://kit.svelte.dev/docs/adapter-vercel for edge/serverless configurations
export const config = {
	runtime: 'nodejs18.x'
};

const awsAuthConfig = {
	aws_appsync_graphqlEndpoint: APPSYNC_GRAPHQL_URL,
	aws_appsync_region: APPSYNC_REGION,
	aws_appsync_authenticationType: APPSYNC_AUTHENTICATION_TYPE,
	Auth: {
		region: APPSYNC_REGION,
		userPoolId: USERPOOL_ID,
		userPoolWebClientId: USERPOOL_CLIENTID,
		identityPoolId: IDENTITYPOOL_ID,
		mandatorySignIn: false,
		oath: {
			domain: COGNITO_DOMAIN,
			scope: [
				'email', 
				'openid', 
				'profile'
			],
			redirectSignIn: 'http://localhost:5173',
			redirectSignOut: 'http://localhost:5173',
			responseType: 'code',
		},
	},
};

export const load = (async () => {
	// configure Amplify auth and environments
	Amplify.configure(awsAuthConfig);
	
	return { 
		initReq: {status: 200, msg: 'Amplify auth successful!'} 
	};
}) satisfies LayoutServerLoad;
