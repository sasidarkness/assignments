try {
 
  console.log(nonExistentVariable);
} 
catch (error) {
  console.error("Error caught:", error.message);
} 
finally {
  console.log("Code executed.");
}
