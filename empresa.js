const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://sebasrojasm1:vav4whwYN0mELMTL@cluster0.zve1xei.mongodb.net/`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexion a la base de datos"));


db.once("open", () => {
    console.log("La conexion se ha establecido.")

    userSchema = mongoose.Schema({
        nombre: String,
        nEmpleados: Number,
        pais: String,
        categoria: String,
        sedes: Number
    })

    const Empresa = mongoose.model("empresa", userSchema);

    const app = express();
    app.use(express.json())


    /*Imprimir todas las empresas */
    app.get("/api/empresas", async(req, res) => {
        const empresa = await Empresa.find()
        res.json(empresa)
    });


    /*Imprime todas las empresas de EE.UU*/
    app.get("/api/empresasEEUU", async(req, res) => {
        const empresaUSA = await Empresa.find({sedes: "EEUU"})        
        res.json(empresaUSA)
    });

    
    /*Imprime todos las empresas que tengan entre 200 y 300 empleados*/
    app.get("/api/empresaEmpleados", async(req, res) => {
        const empresaEmpleados = await Empresa.find({nEmpleados: { $gte: 200, $lte: 300 }})
        res.json(empresaEmpleados)
    });



    /*Asignar puerto: */
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })

})