const fs = require("fs");

const users = require("./usernewpractice4");

let user = {
  name1: "Emplyoee1",
  firstname: tejas,
  lastname: rahul,
  age: 23,
  employee_id: 2,
  name2: "Emplyoee2",
  firstname: raj,
  lastname: dhan,
  age: 24,
  employee_id: 4,
  name3: "Emplyoee3",
  firstname: akash,
  lastname: gowda,
  age: 25,
  employee_id: 6,
  name4: "Emplyoee4",
  firstname: yukthi,
  lastname: shetty,
  age: 26,
  employee_id: 8,
  name5: "Emplyoee5",
  firstname: shashi,
  lastname: kruthik,
  age: 27,
  employee_id: 10,
};

let user2 = {
   name6: "Emplyoee6",
   firstname: surya,
   lastname: kiran, 
   age: 35,
   emplyoee_id: 12,
   name7: "Emplyoee7",
   firstname: sharma,
   lastname: karan, 
   age: 33,
   emplyoee_id: 14,
   name7: "Emplyoee7",
   firstname: giddu,
   lastname: rajesh, 
   age: 31,
   emplyoee_id: 16,
};

users.unshift(user);
users.push(user2)

fs.writeFile("usernewpractice4.json", JSON.stringify(users),err => {

   if(err) throw err;

   console.log("Done writing");
});   
 