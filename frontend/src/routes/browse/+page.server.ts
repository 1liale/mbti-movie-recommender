import type { ListAllMoviesQuery } from '$graphql/API';
import { listAllMovies } from '$graphql/queries';
import type { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import type { PageServerLoad } from './$types';
import { APPSYNC_AUTHENTICATION_TYPE } from '$env/static/private';

export const load = (async ({ parent }) => {
	await parent(); // necessary because all loads are performed asynchronously in parallel (race condition: might not get authenticated first)
	const listallMoviesResult = await API.graphql<GraphQLQuery<ListAllMoviesQuery>>({
		query: listAllMovies,
		variables: {},
		authMode: APPSYNC_AUTHENTICATION_TYPE as GRAPHQL_AUTH_MODE
	});
	return { result: listallMoviesResult };
}) satisfies PageServerLoad;
