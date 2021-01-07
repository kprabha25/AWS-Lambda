import { UserInputError } from 'apollo-server-express'

export default {
    Query: {
        hello: () => 'Hello world!',
        getusers: async (parent, args, { models }) => {
            try {
                console.log("models : ", models)
                const user = await models.User.find({})                
                if (user.length) {
                    console.log("user length is : ", user.length)
                    return user;
                }
                else {
                    throw new UserInputError("Database Error: No Records Found");
                }
            } catch (err) {
                throw new UserInputError(err.message)
            }
        }
    },
    Mutation: {
        addUser: async (parent, args, { models }) => {
            try {                
                let userObj = new models.User(args.name);
                let user = await userObj.save()
                if (user.length)
                    return user;
                else
                    throw new UserInputError("Database Error: No Records Found");
            } catch (err) {
                throw new UserInputError(err.message)
            }
        }
    }
}