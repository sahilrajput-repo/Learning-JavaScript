const accountId = "057"
let accountEmail = "sahilrajput.inbox@gmail.com"
var accountPassword = "1821"
accountCity = "Delhi" //variable can also be declared like this
let accountState; 

/* 
mostlty use const and let
prefer not to use var
because of issue in block scope and funcational scope
*/

//accountId = 033 // not allowed
accountEmail = "khushichauhan@gmail.com"
accountPassword = "1252"
accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);


//In Table
console.table([accountId, accountEmail, accountPassword, accountCity]);

