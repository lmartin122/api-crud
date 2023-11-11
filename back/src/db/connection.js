const mongoose = require('mongoose');

const password = '45788798'
const dbname = 'tp_web'
const uri = `mongodb+srv://lmartin12:${password}@lmartin12.piac3u5.mongodb.net/${dbname}`


const connection = () => {
    mongoose.connect(uri)
    .then( ()=> {console.log('Connected')})
    .catch((error) => console.error(error));

}

module.exports = connection