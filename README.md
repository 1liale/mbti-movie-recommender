# MBTI Movie Recommender

## About
A full-stack serverless web application that recommends movies to users based on their predicted MBTI personality indicators.

### Project Overview:
Phase 1: Achieve a MVP
- Stage 1: Setup overall workflow (repository, CI/CD, aws configurations) for serverless application development.
- Stage 2: Create a rudamentary frontend web interface, api, and provide mock data for backend services (no ml work needed yet). 
- Stage 3: Set up backend database to correctly feed data for the frontend to use and ensure endpoints are integrated.
- Stage 4: Get ML model to work locally and deploy to sagemaker for training and hosting. Integrate with lambda services.

Phase 2: Product improvement (Repeat this phase until objectives are achieved)
- Stage 1: Testing, Documentation, and Code Refactoring.
- Stage 2: Improve UI/UX on frontend, setup AWS Cognito for authentication. 
- Stage 3: Improve core recommender system to be more accurate and useful.

> Time Estimation:
> ```
>  Official Start Date: August 19, 2023
>  Expected Completion Dates: Phase 1 by Sep 6, 2023, Phase 2 undetermined   
> ```

## Technologies
Frontend: TS, Svelte + SvelteKit, TailwindCSS, Flowbite UI Library, AWS amplify

API: API Gateway

Backend: Lambda Functions, MongoDB and SageMaker to run ML models

![Project Architecture](assets/RoughProjArch.png)
