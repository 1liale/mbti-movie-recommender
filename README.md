# MBTI Movie Recommender

## About
A full-stack serverless web application that recommends movies to users based on their predicted MBTI personality indicators.

![MBTIMoviesHome](assets/MbtiMoviesHome.png)

### Project Overview (Original Plan):

#### Current Progress: 

- [x] Phase 1
- [ ] Phase 2
- [ ] Stage 1
- [ ] Stage 2
- [x] Stage 3
- [ ] Stage 4

Phase 1: Achieve a MVP
- Stage 1: Setup overall workflow (repository, CI/CD, aws configurations) for serverless application development.
- Stage 2: Create a rudamentary frontend web interface, api, and provide mock data for backend services (no ml work needed yet). 
- Stage 3: Set up backend database to correctly feed data to the frontend  and ensure api endpoints are working.
- Stage 4: Get ML model to work locally and deploy to sagemaker for training and hosting. Integrate with lambda services.

Phase 2: Product improvement (Repeat this phase until objectives are achieved)
- Stage 1: Testing, Documentation, and Code Refactoring.
- Stage 2: Improve UI/UX on frontend, setup AWS Cognito for authentication. 
- Stage 3: Improve core recommender system to be more accurate and useful.

> Time Estimation:
> ```
>  Official Start Date: August 19, 2023
>  Expected Completion Dates: Phase 1 by Sep 11, 2023, Phase 2 undetermined 
> ```
<h2 style="color: red;">Reflection (September 16, 2023)</h2>


Unfornately, a MVP was not achieved within the expected time frame that I allowed for myself. However, the process thus far has been rewarding and helped me develop a much better grasp of different web & cloud tools/technologies like `CDK` and `Sveltekit` :) 

I was able to overcome various challenges like coming up with a suitable fullstack architecture, setup CI/CD, securely configure environment variables & secrets, and figure out the confusing mess that is AWS Cognito since Appsync does not by default support unauth access (tried various configurations with `API_KEY`, `AMAZONG_CONGITO_USERPOOL` and finally got it to work with `AWS_IAM`)

## Technologies (Original Idea)
Frontend: TS, Svelte + SvelteKit, TailwindCSS, Flowbite UI Library, AWS amplify

API: API Gateway

Backend: Lambda Functions, MongoDB and SageMaker to run ML models

![Project Architecture](assets/RoughProjArch.png) 

> Not a full accurate picture of current setup

## Current Setup

Hosting: Deployed to Vercel CDN 

Frontend: TS, Svelte + SvelteKit, TailwindCSS, Flowbite UI Library, Amplify SDK

API: Appsync Graphql API

Backend: MongoDB, Cognito Userpools, Identity Pools

> Will still have to develop the next steps of integrating the ML model for making MTBI predictions into the project (MLOps), potentially using tools like `Lambda` and `Sagemaker` to make it work

