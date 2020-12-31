// const { MONGO_CONNECTION_STRING } = require("./db/config");
// const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'kitty' });
// kitty.save().then(() => console.log('meow'));

import mongoose, { model } from 'mongoose'

const userSchema = new mongoose.Schema({ name: String })

const User = mongoose.model('User', userSchema)
module.exports = User