https://app.serverless.com/

https://app.serverless.com/lookman

Lambda Size : 
https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#limits-list


Khaled Osman
https://github.com/khaledosman?before=Y3Vyc29yOnYyOpK5MjAyMC0wOC0xMFQxNjo1MjoxMSswNTozMM4REu9A&tab=repositories

khaledosman/serverless-graphql-mongodb-lambda
https://github.com/khaledosman/serverless-graphql-mongodb-lambda/blob/master/graphql/apollo-server.js

khaledosman/serverless-graphql-typescript-mongo-redis
https://github.com/khaledosman/serverless-graphql-typescript-mongo-redis

Using Mongoose With AWS Lambda
https://mongoosejs.com/docs/lambda.html
https://www.reddit.com/r/mongodb/comments/8gqm3z/does_anyone_have_any_experience_using_lambda/
https://jsfiddle.net/FestiveOx/z9yprtf3/

How To Integrate an Apollo GraphQL Server with MongoDB and TypeScript Code Generator (Part 2)
https://medium.com/better-programming/how-to-integrate-an-apollo-graphql-server-with-mongodb-and-typescript-code-generator-b029d821591

Apollo configuration : 
https://www.apollographql.com/docs/apollo-server/v1/servers/lambda/


Running a scalable & reliable GraphQL endpoint with Serverless
https://www.serverless.com/blog/running-scalable-reliable-graphql-endpoint-with-serverless

What are Serverless Components, and how do I use them?
https://www.serverless.com/blog/what-are-serverless-components-how-use?spm=a2c6h.14275010.0.0.5c893cf7tiHHpZ

AWS | Typescript Apollo Lambda
https://www.serverless.com/examples/aws-node-typescript-apollo-lambda

Get started with Serverless Framework Open Source & AWS
https://www.serverless.com/framework/docs/getting-started/


serverless-graphql-typescript-mongo-redis
https://github.com/khaledosman/serverless-graphql-typescript-mongo-redis

Write ES6/ES7 in Serverless Framework using Babel 7 and Webpack 4
https://medium.com/@kilgarenone/write-es6-es7-in-serverless-framework-using-babel-7-and-webpack-4-5bd742168e1a
https://archive.jlongster.com/Backend-Apps-with-Webpack--Part-I
https://www.gorillastack.com/news/optimizing-your-lambda-cold-starts-with-serverless-webpack/
https://medium.com/code-oil/webpack-javascript-bundling-for-both-front-end-and-back-end-b95f1b429810
https://serverlessfirst.com/fff-webpacking-lambdas/
https://thecodebarbarian.com/bundling-a-node-js-function-for-aws-lambda-with-webpack

-----
old package.json
==============
{
  "name": "aws-serverless",
  "version": "1.0.0",
  "description": "",
  "main": "handler.js",
  "scripts": {
    "dev": "nodemon --exec babel-node local.js",
    "build1": "babel lib -d dist",
    "start": "npm run build && nodemon dist/graphql.js",
    "serve": "node dist/graphql.js",
    "webpack": "webpack",
    "build2": "webpack --mode production --progress",
    "build": "webpack --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/polyfill": "^7.12.1",
    "apollo-server": "^2.19.1",
    "apollo-server-express": "^2.19.1",
    "apollo-server-lambda": "^2.19.1",
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.2.2",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-runtime": "^6.26.0",
    "cookie-parser": "^1.4.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "graphql": "^15.4.0",
    "mongoose": "^5.11.10"
  },
  "devDependencies": {
    "@babel/cli": "^7.12.10",
    "@babel/core": "^7.10.3",
    "@babel/node": "^7.10.3",
    "@babel/preset-env": "^7.10.3",
    "@babel/register": "^7.10.3",
    "axios": "^0.19.2",
    "nodemon": "^2.0.4",
    "webpack": "^5.11.1",
    "webpack-cli": "^4.3.1",
    "webpack-node-externals": "^2.5.2"
  },
  "type": "module"
}
