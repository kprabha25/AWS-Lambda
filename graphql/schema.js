const { gql } = require('apollo-server-express');
// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
type User {
  name: String
},
 type Query {
    hello: String,
    getusers: User
  }`;

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getusers: async (parent, args, { User }) => {
      try {
        console.log("Model User ",User)
        const user = await User.testcoll.find({})
        if (user.length)
          return user;
        else
          throw new UserInputError("Database Error: No Records Found");
      } catch (err) {
        throw new UserInputError(err.message)
      }
    }
  }  
};
