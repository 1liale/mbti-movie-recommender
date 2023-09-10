import {
	APPSYNC_REGION,
	USERPOOL_ID,
	USERPOOL_CLIENTID,
	IDENTITYPOOL_ID,
	APPSYNC_GRAPHQL_URL,
	APPSYNC_AUTHENTICATION_TYPE,
	APPSYNC_API_KEY
} from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import { Amplify } from 'aws-amplify';

export const load = (async () => {
	console.log("TEST ENV LOAD", APPSYNC_REGION)
	// configure Amplify auth and environments
	Amplify.configure({
		Auth: {
			region: APPSYNC_REGION,
			userPoolId: USERPOOL_ID,
			userPoolWebClientId: USERPOOL_CLIENTID,
			identityPoolId: IDENTITYPOOL_ID
		},
		aws_project_region: APPSYNC_REGION,
		aws_appsync_graphqlEndpoint: APPSYNC_GRAPHQL_URL,
		aws_appsync_region: APPSYNC_REGION,
		aws_appsync_authenticationType: APPSYNC_AUTHENTICATION_TYPE,
		aws_appsync_apiKey: APPSYNC_API_KEY
	});
	return {};
}) satisfies LayoutServerLoad;
