import {
	APPSYNC_REGION,
	IDENTITYPOOL_ID,
	APPSYNC_GRAPHQL_URL,
	APPSYNC_AUTHENTICATION_TYPE
} from '$env/static/private';
import type { ListAllMoviesQuery } from '$graphql/API';
import { listAllMovies } from '$graphql/queries';
import { type GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import type { LayoutServerLoad } from './$types';
import { API, Amplify } from 'aws-amplify';

// see https://kit.svelte.dev/docs/adapter-vercel for edge/serverless configurations
export const config = {
	runtime: 'nodejs18.x'
};

export const load = (async () => {
	const awsAuthConfig = {
		aws_appsync_graphqlEndpoint: APPSYNC_GRAPHQL_URL,
		aws_appsync_region: APPSYNC_REGION,
		aws_appsync_authenticationType: APPSYNC_AUTHENTICATION_TYPE,
		Auth: {
			identityPoolId: IDENTITYPOOL_ID,
			region: APPSYNC_REGION
		}
	};

	// configure Amplify auth and environments
	Amplify.configure(awsAuthConfig);
	const data = await API.graphql<GraphQLQuery<ListAllMoviesQuery>>({
		query: listAllMovies,
		variables: {},
		authMode: GRAPHQL_AUTH_MODE.AWS_IAM
	});
	return { awsAuthConfig, data };
}) satisfies LayoutServerLoad;
