const { ApolloServer, gql } = require('apollo-server-lambda');
import { MONGO_CONNECTION_STRING } from './db/config';
import { User as models } from './db/user';
import{ resolvers, resolvers } from './graphql/schema';

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
    endpoint: "/dev/graphql"
  },
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  }, models)
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});