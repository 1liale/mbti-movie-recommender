import { Auth, API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
const listAllMovies = (
  /* GraphQL */
  `
	query ListAllMovies($limit: Int, $skip: Int) {
		listAllMovies(limit: $limit, skip: $skip) {
			_id
			description
			genres
			img_path
			meta {
				certificate
				metascore
				rating
				time
				votes
				__typename
			}
			name
			year
			__typename
		}
	}
`
);
const load = async () => {
  const source = await Auth.Credentials.getCredSource();
  console.log("SOURCE", source);
  const isUserLoggedIn = !(source === "guest" || !source);
  console.log("isUserLoggedIn", isUserLoggedIn);
  return {
    streamed: await API.graphql({
      query: listAllMovies,
      variables: {},
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM
    })
  };
};
export {
  load
};
