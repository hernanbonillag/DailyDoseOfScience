//mongo conecction
const mongoose = require('mongoose')
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conectado a Mongodb Atlas"))
    .catch((error)=> console.error(error));
