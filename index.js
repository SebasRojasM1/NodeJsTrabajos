const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://sebasrojasm1:Dipamagri1@cluster0.ohf7zua.mongodb.net/`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexion a la base de datos"));


db.once("open", () => {
    console.log("La conexion se ha establecido.")

    userSchema = mongoose.Schema({
        nombre: String,
        apellido: String
    })


    const User = mongoose.model("usuarios", userSchema);

    const app = express();
    app.use(express.json())


    /*Obtener todos los usuarios que sean mayores de 18 años.*/
    app.get("/api/ejercicio1", async(req, res) => {
        const ejercicio1 = await User.find({edad: {$gt: 18} })
        res.json(ejercicio1)
    });


    /*Obtener todos los usuarios que sean de Londres o de París.*/
    app.get("/api/ejercicio2", async(req, res) => {
        const ejercicio2 = await User.find({ ciudad: { $in: ["Londres", "Paris"] } })
        res.json(ejercicio2)
    });


    /*Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.*/
    app.get("/api/ejercicio3", async(req, res) => {
        const ejercicio3 = await User.find({ salario: { $gte: 2000 }, edad: { $lt: 30 } })
        res.json(ejercicio3)
    });


    /*Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.*/
    app.get("/api/ejercicio4", async(req, res) => {
        const ejercicio4 = await User.find({ ciudad: "España", salario: { $gte: 3000 } })
        res.json(ejercicio4)
    });


    /*Obtener todos los usuarios que tengan entre 25 y 35 años.*/
    app.get("/api/ejercicio5", async(req, res) => {
        const ejercicio5 = await User.find({ edad: { $gte: 25, $lte: 35 } })
        res.json(ejercicio5)
    });


    /*Obtener a todos los usuarios que no sean de Estados Unidos.*/
    app.get("/api/ejercicio6", async(req, res) => {
        const ejercicio6 = await User.find({ pais: { $ne: "Estados Unidos" } })
        res.json(ejercicio6)
    });


    /*Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.*/
    app.get("/api/ejercicio7", async(req, res) => {
        const ejercicio7 = await User.find({ ciudad: "Londres", salario: { $gte: 2500 }, edad: { $gte: 30 } })
        res.json(ejercicio7)
    });


    /*Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.*/
    app.get("/api/ejercicio8", async(req, res) => {
        const ejercicio8 = await User.find({ ciudad: "Australia", peso: { $gte: 140 } })
        res.json(ejercicio8)
    });


    /*Obtener a todos los usuarios que no sean de Londres ni de París.*/
    app.get("/api/ejercicio9", async(req, res) => {
        const ejercicio9 = await User.find({ ciudad: { $nin: ["Londres", "Paris"] } })
        res.json(ejercicio9)
    });


    /*Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.*/
    app.get("/api/ejercicio10", async(req, res) => {
        const ejercicio10 = await User.find({ $or: [{ salario: { $lt: 2000 } }, { edad: { $gte: 40 } }] })
        res.json(ejercicio10)
    });


    /*Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.*/
    app.get("/api/ejercicio11", async(req, res) => {
        const ejercicio11 = await User.find({ ciudad: "Canada", $or: [{ salario: { $gte: 4000 } }, { altura: { $gte: 180 } }] })
        res.json(ejercicio11)
    });


    /*Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.*/
    app.get("/api/ejercicio12", async(req, res) => {
        const ejercicio12 = await User.find({ ciudad: "Italia", edad: { $gte: 20, $lte: 30 } })
        res.json(ejercicio12)
    });


    /*Obtener todos los usuarios que no tengan un correo electrónico registrado.*/
    app.get("/api/ejercicio13", async(req, res) => {
        const ejercicio13 = await User.find({ correo: { $exists: false } });
        res.json(ejercicio13)
    });


    /*Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.*/
    app.get("/api/ejercicio14", async(req, res) => {
        const ejercicio14 = await User.find({ ciudad: "Francia", $and: [{ salario: { $gte: 3000, $lte: 5000 } }] });
        res.json(ejercicio14)
    });

    
    /*Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.*/
    app.get("/api/ejercicio15", async(req, res) => {
        const ejercicio15 = await User.find({ ciudad: "Brasil", $or: [{ peso: { $lt: 120 } }, { peso: { $gte: 140 } }] });
        res.json(ejercicio15)
    });


    /*Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.*/
    app.get("/api/ejercicio16", async(req, res) => {
        const ejercicio16 = await User.find({ $or: [{ ciudad: "Argentina" }, { ciudad: "Chile" }], edad: {$lt: 25}  });
        res.json(ejercicio16)
    });


    /*Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.*/
    app.get("/api/ejercicio17", async(req, res) => {
        const ejercicio17 = await User.find({ $and: [{ ciudad: { $nin: ["España", "Mexico"] } }, { salario: { $lt: 3000 } }] });
        res.json(ejercicio17)
    });


    /*Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.*/
    app.get("/api/ejercicio18", async(req, res) => {
        const ejercicio18 = await User.find({ ciudad: "Alemania", $or: [{ salario: { $lt: 4000 } }, { edad: { $gte: 35 } }] });
        res.json(ejercicio18)
    });


    /*Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.*/
    app.get("/api/ejercicio19", async(req, res) => {
        const ejercicio19 = await User.find({ ciudad: {$nin: "Colombia"}, altura: { $lt: 170 } });
        res.json(ejercicio19)
    });


    /*Obtener todos los usuarios que sean de India y que no tengan un salario registrado.*/
    app.get("/api/ejercicio20", async(req, res) => {
        const ejercicio20 = await User.find({ ciudad: "India", salario: { $exists: false } });
        res.json(ejercicio20)
    });
    

    /*Asignar puerto: */
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })

})