'use strict';
module.exports.hello = (event, context, callback) => {
   const response = {
      statusCode: 200,
      body: JSON.stringify({
         message:(event.queryStringParameters && event.queryStringParameters.displaymessage!="") ? event.queryStringParameters.displaymessage : 'Go Serverless v1.0! Your function executed successfully!'
      }),
   };
   callback(null, response);
   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
   // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};