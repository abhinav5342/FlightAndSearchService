## welcome to Flights Service 

   ## Project Setup
   
   -clone the project o your local
   
   -execute `npm install` on the same path of as of root directory 
     of the downloaded project
   
   -create a `.env` file and add the following environment variable:
     -`port=3000`  
   
   -Inside the src/config file create a new file `config.json` and 
   then add the following piece of json:
   ```
   "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "FLights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

   ```
   <!-- -src/
       index.js //server
       models/
       controllers/
       middlewares/
       services/
       utils/
       config/
    -tests/ [later]   
    -static/
    -temp/ -->
