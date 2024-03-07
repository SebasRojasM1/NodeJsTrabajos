const express = require("express")
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://sebasrojasm1:Dipamagri1*@dbriwi.nifv8td.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connect;

db.on("error", console.error.bind(console, "Error de conexion a la base de datos"));

