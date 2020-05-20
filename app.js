const bank = require('./bank');
const logger = require("./console-logger");
//const logger = require("./file-logger");
const user1 = "pablito";
const user2 = "juanito";

bank.config({logger});

bank.createAccount(user1);
bank.credit(user1,200);
bank.debbit(user1,10);
console.log(user2, bank.getFounds(user1));


bank.createAccount(user2);
bank.credit(user2,100);
bank.debbit(user2,10);
console.log(user2, bank.getFounds(user2));