const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://bruno:magaldi321@fiaptecnico.5fetl.mongodb.net/test')
}

module.exports = conn
