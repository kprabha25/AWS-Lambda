// local.js

import { ApolloServer, ApolloError, UserInputError } from 'apollo-server-express';
import 'dotenv/config';
import { MONGO_CONNECTION_STRING, PORT } from './config/config';
import mongoose from 'mongoose';
import  models  from './models/index';
import resolvers from './graphql/resolvers/index';
import schema from './graphql/typedefs/index';
import express from 'express';
import cookieParser from 'cookie-parser';

const connectMongo = () => {
    console.log('v : ', MONGO_CONNECTION_STRING)
    return mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
}

const app = express();
app.use(cookieParser());

connectMongo().then(() => {
    console.log("Connected To The MongoDB.")
}).catch(err => {
    console.log("DB Connection Server Error : ", err)
})

// // Create an instance of model SomeModel
// var awesome_instance = new User({ name: 'awesome' });

// // Save the new model instance, passing a callback
// awesome_instance.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

// let obj = User.find({}, function(err, response){
//     console.log("mongoose respon : ",response);
//  });

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    context: async () => {
        return { models };
    }
});
server.applyMiddleware({ app });

// app.listen({port:PORT}).then(({ url }) => {
//     console.log(`Apollo Server on http://localhost:${PORT}${server.graphqlPath}`);
// });
app.listen({ port: PORT }, () => {
    console.log(`Apollo Server on http://localhost:${PORT}${server.graphqlPath}`);
  })