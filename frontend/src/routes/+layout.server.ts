// import {
// 	APPSYNC_REGION,
// 	USERPOOL_ID,
// 	USERPOOL_CLIENTID,
// 	IDENTITYPOOL_ID,
// 	APPSYNC_GRAPHQL_URL,
// 	APPSYNC_AUTHENTICATION_TYPE,
// 	APPSYNC_API_KEY
// } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import { Amplify } from 'aws-amplify';

export const load = (async () => {

	const USERPOOL_ID="us-east-1_UziwiyZrS"
	const USERPOOL_CLIENTID="26dgpfsqhn6uul0jj8nc0vbcr7"
	const IDENTITYPOOL_ID="us-east-1:c3aa3405-aca8-4087-96a3-3ceaddbad65f"
	const APPSYNC_AUTHENTICATION_TYPE="AWS_IAM"
	const APPSYNC_REGION="us-east-1"
	const APPSYNC_API_ID="t62wtylelncsnkln3hwcjl4vbm"
	const APPSYNC_API_KEY="da2-krifsxo7izcy7litnduu4tx4di"
	const APPSYNC_GRAPHQL_URL="https://h7mtohzf5jfd3bw5dss5zxv3iq.appsync-api.us-east-1.amazonaws.com/graphql"

	// configure Amplify auth and environments
	Amplify.configure({
		Auth: {
			region: APPSYNC_REGION,
			userPoolId: USERPOOL_ID,
			userPoolWebClientId: USERPOOL_CLIENTID,
			identityPoolId: IDENTITYPOOL_ID,
			mandatorySignIn: false
		},
		aws_cognito_region: APPSYNC_REGION,
		aws_user_pools_id: USERPOOL_ID,
		aws_user_web_client_id: USERPOOL_CLIENTID,
		aws_congito_identity_pool_id: IDENTITYPOOL_ID,
		aws_project_region: APPSYNC_REGION,
		aws_appsync_graphqlEndpoint: APPSYNC_GRAPHQL_URL,
		aws_appsync_region: APPSYNC_REGION,
		aws_appsync_authenticationType: APPSYNC_AUTHENTICATION_TYPE,
		aws_appsync_apiKey: APPSYNC_API_KEY
	});
	return {};
}) satisfies LayoutServerLoad;
