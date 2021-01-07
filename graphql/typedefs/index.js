import userSchema from './user';
import { gql } from 'apollo-server-express';

const baseSchema = gql`

type Query {
  _: String
}
type Mutation {
  _: String
}
type Subscription {
  _: String
}
`;
export default [baseSchema, userSchema]