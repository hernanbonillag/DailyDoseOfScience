const mongoose = require("mongoose");

const noticiaSchema = mongoose.Schema({
    titulo: {
        type: String
    },
    url:{
        type: String
    },
    imagen:{
        type: String
    },
    autor:{
        type: String
    },
    fecha:{
        type: String
    },
    resena:{
        type: String
    },
});
module.exports = mongoose.model('Noticia', noticiaSchema);