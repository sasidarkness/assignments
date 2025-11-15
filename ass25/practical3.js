function checkAge(age) {
  if (age < 18) {
    throw new Error("Access denied: You must be at least 18 years old!");
  } else {
    console.log("✅ Access granted. Welcome!");
  }
}


try {
  checkAge(16); 
  
} 
catch (error) {
  console.error("Error caught:", error.message);
} 
finally {
  console.log("Code executed.");
}

