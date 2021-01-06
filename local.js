// local.js

const { ApolloServer } = require('apollo-server');
import 'dotenv/config';
import { MONGO_CONNECTION_STRING } from './config/config';
import mongoose from 'mongoose';
import { User } from './db/user';
import { resolvers, typeDefs } from './graphql/schema';

const connectMongo = () => {
    console.log('v : ', MONGO_CONNECTION_STRING)
    return mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
}

connectMongo().then(() => {
    console.log("Connected To The MongoDB.")
}).catch(err => {
    console.log("DB Connection Server Error : ", err)
})

const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers:resolvers,
    context: async () => {
        return { User };
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});