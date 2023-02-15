const express = require ('express');
const bodyParser = require('body-parser');
// const CityRepository =  require('./repository/city-repository');
// const { City }= require('./models/index')
const {PORT}  = require('./config/ServerConfig');

const db = require('./models/index');

const ApiRoutes = require('./routes/index');

const { Airport , City } = require('./models/index');

const setupAndStartServer = async ()=> {

    //create the express object
     const app = express();

     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));

     app.use('/api',ApiRoutes);

     app.listen(PORT, async() =>{
        console.log(`server started at ${PORT}`);
        
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true})
        }
     }); 
}

setupAndStartServer();