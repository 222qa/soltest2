const fs = require("fs");

const users = require("./emplyoe");

let user = {
  firstname: "tejas",
  lastname: "rahul",
  age: 23,
  emp_id: 46
};

let user2 = {
   fname: "surya",
   lname: "kiran", 
   age: 35,
   emp_id: 12   
};

users.unshift(user);
users.push(user2)

fs.writeFile("emplyoe.json", JSON.stringify(users),err => {

   if(err) throw err;

   console.log("Done writing");
});   
 