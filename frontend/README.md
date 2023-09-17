# MBTI Movies Recommender - frontend

## Tools
1. Sveltekit framework - file based routing, SSR, and fast development
2. Flowbite - a ui library to reduce time spent designing UI aesthetics and can more quickly develop new features.
3. TailwindCSS - A powerful alternative/addition to vanilla CSS when used alongside the Flowbite library to quickly setup Theme control and develop new components without having to maintain a separate CSS file.
4. Husky - CI integration with git pre-commit and pre-push hooks to run lint checks and build checks to ensure code quality before pushing to GitHub.
5. Amplify Codegen - generated GraphQL types and functions that can be used throughout the code using a GraphQL schema.
6. Amplify SDK - used to make both unauthenticated and authenticated requests to backend services.

## Start

To install run either `pnpm i --frozen-lockfile` or `pnpm i` if the lockfile is not present

Next, run `cp local-env .env` to load the necessary environment variables

## Developing

Then execute `pnpm dev` to run the program locally

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.
