const express = require ('express');
const bodyParser = require('body-parser');
// const CityRepository =  require('./repository/city-repository');
// const { City }= require('./models/index')
const {PORT}  = require('./config/ServerConfig');

const ApiRoutes = require('./routes/index');

const setupAndStartServer = async ()=> {

    //create the express object
     const app = express();

     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));

     app.use('/api',ApiRoutes);

     app.listen(PORT, async() =>{
        console.log(`server started at ${PORT}`);
     }); 
}

setupAndStartServer();