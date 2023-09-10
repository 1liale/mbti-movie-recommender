# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

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