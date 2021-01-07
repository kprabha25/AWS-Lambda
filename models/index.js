const mongoose = require('mongoose');
import {User} from './user'
import { MONGO_CONNECTION_STRING } from '../config/config';

const connectMongo = () => {
    return mongoose.connect(MONGO_CONNECTION_STRING, {useNewUrlParser : true, useFindAndModify: false, useUnifiedTopology: true})
  }

  const models = {
    User   
  }

  export {connectMongo};
  export default models;

  