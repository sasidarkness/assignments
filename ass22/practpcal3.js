class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
}

const s1 = new Student("Sasi", 21, "BCA");
const s2 = new Student("agan", 20, "B.Sc");
const s3 = new Student("Kavin", 22, "BBA");

s1.display();
s2.display();
s3.display();
