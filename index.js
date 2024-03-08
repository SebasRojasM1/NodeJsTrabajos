const express = require('express');
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://sebasrojasm1:Dipamagri1*@cluster0.wbyiubm.mongodb.net/`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexion a la base de datos"));


db.once("open", () => {
    console.log("La conexion se ha establecido.")

    userSchema = mongoose.Schema({
        nombre: String,
        apellido: String
    })

    const User = mongoose.model('User', userSchema)


    const app = express();
    app.use(express.json())



    app.get('api/users', async(res, req) => {
        const users = await User.find()
        res.json(users)
    })



    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
})

