const express = require('express');
const route = express.Router();
const { createHmac } = require('crypto');
const WEBHOOK_SECRET = process.env.SECRET;
 
const isValidRequest = (body /* Buffer */, secret /* string */, expectedSignature /* string */) =>
    expectedSignature == WEBHOOK_SECRET;
    
route.post('/logs', function(req, res, next) {
  const {body,headers} = req;
  const valid = isValidRequest(Buffer.from(body.toString()), WEBHOOK_SECRET, headers['x-uipath-signature']);
  if(!valid){
  	res.sendStatus(401);
  }else{
  	res.sendStatus(202);
  }
});
 
module.exports = route;
