//const { ApolloServer, gql } = require('apollo-server-lambda');
import { ApolloServer, ApolloError, UserInputError } from 'apollo-server-express';
import 'dotenv/config';
import { MONGO_CONNECTION_STRING, PORT } from '../config/config';
import mongoose from 'mongoose';
import  models  from '../models/index';
import resolvers from '../graphql/resolvers/index';
import typeDefs from '../graphql/typedefs/index';

const connectMongo = () => {
  return mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
}

connectMongo().then(() => {
  console.log("Connected To The MongoDB.")
}).catch(err => {
  console.log("DB Connection Server Error : ", err)
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/prods/graphql"
  },
  tracing: true,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context    
  })
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});