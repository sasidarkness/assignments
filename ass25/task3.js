function checkNumber(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative!");
  } else {
    console.log("Valid number:", num);
  }
}


try {
  checkNumber(-5);
} catch (error) {
  console.error("Error caught:", error.message);
}
