const {SHA256} = require('crypto-js');
var bcrypt = require('bcryptjs');

// var message = 'I am user Number 3';
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hashed Value: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'SomeSecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'SomeSecret').toString();
// if(resultHash === token.hash){
//     console.log("Data is not changed");
// } else{
//     console.log("Data is changed");
// }


var password = 'abc123';
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// });

var hashedPassword = '$2a$10$GaJuq6NMf5gRLCzN0jA./udB61poIgp9gAyAo80jP5KIoJ0LPE8uK';
bcrypt.compare(password, hashedPassword, (err, result) => {
    console.log(result);
});

