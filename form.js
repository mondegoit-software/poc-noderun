// https://noderun.com/ide/megan_bond/widget-sets/
function app() {

pjs.defineDisplay("display","form.json");

display.form.execute();

pjs.query("INSERT INTO requests set ?", {name, email, type, details});

let cred = {method :"get", uri:"https://noderun.com/run/profound-logic/plus-gmail/credentials", json: true};

let credentials = pjs.sendRequest(cred);

let gmail = require('gmail-send');
let send = gmail(credentials);

const mail = {to:"paulo.costa@mondego-it.com", subject:"IT Service Request", 
text: `Name: ${name}
      Email: ${email}
      Type: ${type}`};

send(mail);

pjs.messageBox("Thank you! Your request was added to our system!");

}

exports.default = app;