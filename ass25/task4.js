function validateUser(name, email) {
  if (!name || name.trim() === "") {
    throw new Error("Invalid name: Name cannot be empty!");
  }
  if (!email || !email.includes("@")) {
    throw new Error("Invalid email: Email must contain '@' symbol!");
  }

  console.log(" User is valid:", name, email);
}


try {
  validateUser("", "example@gmail.com"); 

} catch (error) {
  console.error("Error caught:", error.message);
}
