const{SHA256} = require("crypto-js");

 const jwt = require("jsonwebtoken");

var data  = {
  id: 10
};


var token = jwt.sign(data, '123abc');

console.log(token);

// jwt.verify
var decode = jwt.verify(token,'123abc');
console.log(decode);
