import type { PageServerLoad } from './$types';
import { API, Auth } from 'aws-amplify';
import { type GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { listAllMovies } from '$graphql/queries';
import type { ListAllMoviesQuery } from '$graphql/API';

export const load = (async () => {
	const source = await Auth.Credentials.getCredSource();
	console.log('SOURCE', source);
	const isUserLoggedIn = !(source === 'guest' || !source);
	console.log('isUserLoggedIn', isUserLoggedIn);

	return {
		streamed: await API.graphql<GraphQLQuery<ListAllMoviesQuery>>({
			query: listAllMovies,
			variables: {},
			authMode: GRAPHQL_AUTH_MODE.AWS_IAM
		})
	};
}) satisfies PageServerLoad;
