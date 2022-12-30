const express = require ('express');
const bodyParser = require('body-parser');
const CityRepository =  require('./repository/city-repository');
// const { City }= require('./models/index')
const {PORT}  = require('./config/ServerConfig');

const setupAndStartServer = async ()=> {

    //create the express object
     const app = express();
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));
     app.listen(PORT, async() =>{
        console.log(`server started at $ {PORT}`);
        const repo = new CityRepository();
        repo.createCity({name:"NewDelhi"});
        // console.log(process.env);
     }); 
} ;

setupAndStartServer();