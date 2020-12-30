exports.handler = async function(event, context) { 
    console.log("Sample through AWS CLI")  
  return context.logStreamName
}