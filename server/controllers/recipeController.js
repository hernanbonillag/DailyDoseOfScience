require('../models/database');
const Noticia = require('../models/Noticia');

exports.homepage = async(req,res) =>{
    try{
        const limitNumber = 5;
        const noticias = await Noticia.find({}).limit(limitNumber);
        console.log(noticias);
        res.render('index',{noticias});
    }catch(error){
        res.satus(500).send({message: error.message || "Ocurrio un Error"});
    }
}