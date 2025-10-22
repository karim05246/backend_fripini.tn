const mongosse = require('mongoose')

module.exports.connectToMongoDB = async () => {
    mongosse.set('strictQuery', false)
    mongosse.connect("mongodb://localhost:27017/mydatabase").then(
        () =>{
        console.log("Connected to DB")
        }
    ).catch(
        (err)=>{
            console.log("Error connecting to DB", err)
        }
    )
}
