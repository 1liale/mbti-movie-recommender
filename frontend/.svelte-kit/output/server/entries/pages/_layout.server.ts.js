import { Amplify } from "aws-amplify";
const USERPOOL_ID = "us-east-1_UziwiyZrS";
const USERPOOL_CLIENTID = "26dgpfsqhn6uul0jj8nc0vbcr7";
const IDENTITYPOOL_ID = "us-east-1:c3aa3405-aca8-4087-96a3-3ceaddbad65f";
const APPSYNC_AUTHENTICATION_TYPE = "AMAZON_COGNITO_USER_POOLS";
const APPSYNC_REGION = "us-east-1";
const APPSYNC_API_KEY = "da2-krifsxo7izcy7litnduu4tx4di";
const APPSYNC_GRAPHQL_URL = "https://h7mtohzf5jfd3bw5dss5zxv3iq.appsync-api.us-east-1.amazonaws.com/graphql";
const load = async () => {
  console.log("TEST ENV LOAD", APPSYNC_REGION);
  Amplify.configure({
    Auth: {
      region: APPSYNC_REGION,
      userPoolId: USERPOOL_ID,
      userPoolWebClientId: USERPOOL_CLIENTID,
      identityPoolId: IDENTITYPOOL_ID,
      mandatorySignIn: false
    },
    aws_congito_identity_pool_id: IDENTITYPOOL_ID,
    aws_project_region: APPSYNC_REGION,
    aws_appsync_graphqlEndpoint: APPSYNC_GRAPHQL_URL,
    aws_appsync_region: APPSYNC_REGION,
    aws_appsync_authenticationType: APPSYNC_AUTHENTICATION_TYPE,
    aws_appsync_apiKey: APPSYNC_API_KEY
  });
  return {};
};
export {
  load
};
