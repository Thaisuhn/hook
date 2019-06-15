const express = require('express');
const route = express.Router();
const { createHmac } = require('crypto');
const WEBHOOK_SECRET = process.env.SECRET;
const {es_insert} = require("../middlewear");
 
const isValidRequest = (secret /* string */, expectedSignature /* string */) =>
    expectedSignature == WEBHOOK_SECRET;
    
route.post('/logs', async(req, res, next) => {
  const {body,headers} = req;
  const valid = isValidRequest(WEBHOOK_SECRET, headers['x-uipath-signature']);
  if(!valid){
  	res.sendStatus(401);
  }else{
  	try{
  		const {data} = body;
  		await es_insert(data)
	  	res.sendStatus(202);
  	}catch(e){
  		console.log("Error",e);
	  	res.sendStatus(500);
  	}
  }
});
 
module.exports = route;
