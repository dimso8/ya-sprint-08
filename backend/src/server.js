const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jwt = require("jsonwebtoken");

let publicKey = '';

const port = 8000;
const app = express();

app.use(cors());

async function getPublicKey() {
  await axios({url:'http://keycloak:8080/realms/reports-realm'})
  .then(function (response) {
    publicKey = `-----BEGIN PUBLIC KEY-----\r\n${response.data.public_key.toString()}\r\n-----END PUBLIC KEY-----`;
    console.log(`Public key is recieved:`);
    console.log(publicKey);
  })
  .catch(function (error) {
    console.log(`Public key is not recieved.`);
    console.log(error);
  })
  .finally(function () {
  });
};

app.get('/reports', (req, res) => {

  if (req.headers.authorization) {

    try {
      console.log('jwt');
      console.log(req.headers.authorization.split(" ")[1]);
      console.log('publicKey');
      console.log(publicKey);
      
      let token = jwt.verify(
        req.headers.authorization.split(" ")[1], 
        publicKey,
        { algorithms: ['RS256'] }
      );

      console.log('Token is valid');
      console.log('token');
      console.log(token);

      if (token.realm_access.roles.includes('prothetic_user')) {
        res.status(200).json({message: 'REPORT'});
      }
      else {
        res.status(401).json({message: 'Access Denied: You do not have permission to access this.'});
      }
    } 
    catch (e) {
      console.log('Token is invalid');
      console.log(e);
      res.status(403).json({message:"Token is invalid"})
    }
    return;
  }
  else {
    res.status(403).json({message: 'Forbidden'});
  }
});

app.listen(port, function () {
  getPublicKey();
  console.log(`Listening on port ${port}.`);
});