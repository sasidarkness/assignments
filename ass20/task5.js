
function getUserName(callback) {
  const name = "Sasi"; 
  callback(name);
}


function greetUser(name) {
  console.log("Hello, " + name + "! Welcome!");
}


getUserName(greetUser);
