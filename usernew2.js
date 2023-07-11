const fs = require("fs");

const usernew2 = require("./usernew2");
let user = {
  name: "Saps1",
  age: 25,
  language: ["Node", "React", "Graphq1"]
};

let user1 = {
   name: "Saps2",
   age: 35,
   language: ["MSA","Graphq1"]
};

usersnew2.unshift(usernew2);
usersnew2.push(usernew2)

fs.writeFile("usernew2.json",Json.stringify(usersnew2),err => {

   if(err) throw err;

   console.log("Done writing");
});   
 