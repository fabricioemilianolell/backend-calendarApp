
const mongoose = require("mongoose")

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.DB_CNN);
        //comentar
            // mongoose.set('strictQuery', true)
        console.log("db online")

    } catch (error) {
        
        console.log(error)
        throw new Error("Error a la hora de iniciar base de datos")
    
    }
}

module.exports = {
    dbConnection
}