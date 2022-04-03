const express = require("express");
const dotenv= require('dotenv');
const { addClient,findClient,getAllClinet,updateClient, deletClient} = require("../Controller/clientController");


dotenv.config();
const Router = express.Router();
Router.get('/',getAllClinet)
Router.post('/add',addClient)
Router.post('/findby',findClient)
Router.post('/update',updateClient)
Router.post('/delete',deletClient)


module.exports=Router;





