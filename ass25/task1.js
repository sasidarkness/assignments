try {
  
  console.log(nonExistentVariable);
} 
catch (error) {
  if (error instanceof ReferenceError) {
    console.error("Caught a ReferenceError:", error.message);
  } else {
    console.error("Caught some other error:", error.message);
  }
}

