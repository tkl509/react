class Student {
    constructor(name, email, community) {
      this.name = name;
      this.email = email;
      this.community = community;
    }
  }

  class Bootcamp {
    constructor(name, level, students = []) {
      this.name = name;
      this.level = level;
      this.students = students;
    }
    registerStudent(studentToRegister) {
          const arrFound = this.students.filter(s => s == studentToRegister);
          if (arrFound.length == 0) {
              this.students.push(studentToRegister);
              console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name} ${studentToRegister.community}.`);
          } else {
                  if (studentToRegister.email == arrFound[0].email) {
                      console.log(`The student ${studentToRegister.email} is already registered to ${this.name} ${studentToRegister.community}!`);
                  }
          }
          return this.students;
    }
  }