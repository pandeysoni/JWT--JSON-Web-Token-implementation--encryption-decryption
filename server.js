var jwt = require('jsonwebtoken');
var cert = 'sbsdfbdh2472374shfskjdfh'; 

var encrypt = function(text){
  var encryptData = {
    name: "Soni Pandey" 
  }
  var token = jwt.sign(encryptData.name, cert);
  return token;
}
 
var decrypt = function(text){
  jwt.verify(text, cert, function(err, decoded){
    console.log(decoded)
     return decoded;
  });
}

var encryptData = encrypt("Soni Pandey");
console.log("Encrypt Text", encryptData);
var decryptData = decrypt(encryptData);
console.log("Decrypt Text", decryptData);
