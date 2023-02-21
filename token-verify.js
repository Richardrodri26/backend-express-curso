const jwt = require('jsonwebtoken');

const secret = 'secret';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3Njg1MjAzNH0.t0ESLs0H7t9MrujZTy_Y0A01pJusSK-N9cJ9MHd9994";

function verifyToken(token, secret){
  return jwt.verify(token, secret)
}

const payload = verifyToken(token, secret);
console.log(payload)
