const mongoose = require('mongoose')
function dbConnection(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('connected with Db')
    })
    .catch((err)=>{
        console.log( 'error while connecting with db', err)
    })
}
module.exports = dbConnection