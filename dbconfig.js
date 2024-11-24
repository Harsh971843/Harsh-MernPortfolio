const mongoose  = require('mongoose');

mongoose.connect(process.env.mongo_url,{
  useNewUrlParser: true,
  useUnifiedTopology: true  
});

const db = mongoose.connection;
db.on('error', ()=>{
  console.log('Error connecting to MongoDB')
});
db.once('open', ()=>{
  console.log('Connected to MongoDB')
});
module.exports =mongoose;