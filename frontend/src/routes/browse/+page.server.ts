import type { PageServerLoad } from './$types';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE, type GraphQLQuery } from '@aws-amplify/api';
import { listAllMovies } from '$graphql/queries';
import type { ListAllMoviesQuery, ListAllMoviesQueryVariables } from '$graphql/API'

export const load = (async () => {
    const variables: ListAllMoviesQueryVariables = { limit: null, skip: null }
    await API.graphql<GraphQLQuery<ListAllMoviesQuery>>({
        query: listAllMovies,
        variables: variables,
        authMode: GRAPHQL_AUTH_MODE.API_KEY
    })
    return {
        
    };
}) satisfies PageServerLoad;