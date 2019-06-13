const express = require('express');
const router = express.Router();
const { createHmac } = require('crypto');
 
const PORT = 9090
const WEBHOOK_SECRET = '<same secret as configured in Orchestrator>'
 
const isValidRequest = (body /* Buffer */, secret /* string */, expectedSignature /* string */) =>
    expectedSignature == null || createHmac('sha256', secret)
        .update(body)
        .digest('base64') === expectedSignature
 

const server = createServer((req, resp) => {
 
    let body = new Buffer([])
 
    req.on('data', chunk => body = Buffer.concat([body, chunk]))
 
    req.on('end', () => {
 
        if (!isValidRequest(body, WEBHOOK_SECRET, req.headers['x-uipath-signature'])) {
            console.error('Invalid signature')
            resp.statusCode = 401 // Unauthorized
        } else {
 
            let payload = JSON.parse(body.toString('utf8'))
 
            // Process request
            console.log(payload)
 
            resp.statusCode = 202 // Accepted
        }
 
        resp.end()
    })
 
})
 
server.listen(PORT)

router.get('/logs', function(req, res, next) {
  res.send();
});

module.exports = router;
