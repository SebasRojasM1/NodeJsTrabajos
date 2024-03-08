const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://sebasrojasm1:Dipamagri1*@dbriwi.nifv8td.mongodb.net/`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexion a la base de datos"));


db.once("open", () => {
    console.log("La conexion se ha establecido.")

    userSchema = mongoose.Schema({
        nombres: String,

        apellidos: String,

        correo: String,

        pais: String,

        ciudad: String,

        salario: Number,

        empresa_id: Number,

        created_at: Date,

        update_at: Date
    })


    const User = mongoose.model("User", userSchema);

    const app = express();
    app.use(express.json())

    app.get("api/usuarios", async(res, req) => {
        const usuarios = await User.find()
        res.json(usuarios)
    })

    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })

})