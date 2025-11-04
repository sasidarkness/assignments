function getGrade(marks) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 50) {
    return "B";
  } else {
    return "C";
  }
}


console.log(getGrade(85)); 
console.log(getGrade(65)); 
console.log(getGrade(40));
