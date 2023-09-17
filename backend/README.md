# MBTI Movies Recommender - backend

The backend is configured using AWS CDK, consisting of an AuthStack, IdentityStack, and APIDatabaseStack. 

## Features
Provides authentication against Cognito Userpools and authorization through IdentityPools. Additionally, it includes some setups to provide the option of using federated auth (oauth) or offloading the task of authentication to cognito's own hosted UI, demonstrating the power and versatility of IaC.

The APIDatabaseStack defines an Appsync graphql api that calls AWS Secrets Manager to securely process the MongoDB's API key in order to access MongoDB's Data API endpoint. Also, it provides HTTP resolvers + pipeline to process GraphQL query + mutations such as `listAllMovies` and `insertMovie`.

(deprecated) SvelteHostingStack provides an easy way to link the frontend source code hosted on github with Amplify Hosting platform. However, while it is simple to setup, the tradeoff is that Amplify lacks many of the debug/monitoring tools that a more modern CDN platform like Vercel does. It also does not allow for the use of the new `pnpm` package manager.

## How to run?
Backend doesn't require any additional changes to run (required stacks have already been deployed to cloud via the cdk cli `cdk deploy --all`)

## Data Modelling
Movie Model (i.e displayed in Modal or MovieCard components when queried)

```
Movie
- name
- year
- genre
- description
- img_path
- meta
```

> No User model configured yet, might introduce later to make use of Collaborative Filtering techniques (here's an idea)
```
User
- id
- name
- first_name
- last_name
```