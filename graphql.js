const { ApolloServer, gql } = require('apollo-server-lambda');
import { MONGO_CONNECTION_STRING } from './db/config';
import {User} from './db/user';

const connectMongo = () => {
  return mongoose.connect( MONGO_CONNECTION_STRING , {useNewUrlParser : true, useFindAndModify: false, useUnifiedTopology: true})
}

connectMongo().then(() => {
  console.log("Connected To The MongoDB.")  
}).catch(err => {
  console.log("DB Connection Server Error : ", err)
})


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

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
    context,
  })
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});