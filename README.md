# advent-of-code-2020
NodeJS Lambda Functions for https://adventofcode.com/2020

## Setting Up Dev Environment
> Clone the repository

> NPM Install

> Setup the Serverless framework

Instructions can be found here `https://www.serverless.com/framework/docs/providers/aws/guide/credentials/`. Note that there is the right way to do it (requires a serverless framework account, which is free) OR the fast-way where you need IAM keys.

> Setup your env.development AOC variables, and consider changing preWarm to false so your function isn't being called every 5 minutes.

> That's it!

You can now run `serverless deploy` to create the AWS items (Lambda functions and Dynamo DB Tables)

## Some notes on using Serverless framework once you've done initial deploy
`sls deploy` deploys the current code using the configuration in `.env.development`

`sls deploy --env production` deploys the current code using the configuration in `.env.production` (not included in GIT, you need to create this)

`sls invoke local -f testerFunction` Invoke a function locally. Will run the NodeJS code on your machine, and interacts with SQS and Dynamo on the AWS server. This runs the testerFunction (app/private/tester.js) where you can see how I test the different functions in the app without deploying each time