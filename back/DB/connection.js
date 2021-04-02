const mongoose = require('mongoose');


const url="mongodb://127.0.0.1:27017/amazon";


   const connectDb = mongoose.connect(process.env.MONGODB_URL || url, {
       
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    });
   
    const db = mongoose.connection
    db.once('open', _ => {
        console.log('CONNECTED:', url)
    })

    db.on('error', err => {
        console.log('ERROR: ', err)
    })


module.exports = connectDb;  