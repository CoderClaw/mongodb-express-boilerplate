const mongoose = require("mongoose")


function mongodbConnect(url){
    mongoose.connect(url)
    .then(console.log("database connected..."))
    .catch(err => console.error(err))
}

module.exports = mongodbConnect