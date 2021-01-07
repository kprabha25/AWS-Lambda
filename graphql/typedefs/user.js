import { gql } from 'apollo-server-express';

export default gql`

type User {
  name: String
},

input UserInput {
  name: String
},

extend type Query {
  hello: String,
  getusers: [User]
},

extend type Mutation {
  addUser(user:UserInput):User
}

`;