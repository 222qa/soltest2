const fs = require("fs");

const users = require("./usernew3");

let user = {
  name1: "Saps1",
  age: 25,
  language: ["Node", "React", "Graphq1"]
};

let user2 = {
   name: "Saps2",
   age: 35,
   language: ["MSA","Graphq1"]
};

users.unshift(user);
users.push(user2)

fs.writeFile("usernew3.json", JSON.stringify(users),err => {

   if(err) throw err;

   console.log("Done writing");
});   
 