class School {
  constructor() {
    this.stdArr = [];
    this.teacherArr = [];
    this.principalArr = [];
  }

  addStd(val) {
    this.stdArr.push(...val);
    return this.stdArr;
  }
  showStd() {
    return this.stdArr;
  }
  addTeacher(val) {
    this.teacherArr.push(...val);
    return this.teacherArr;
  }
  showTeacher() {
    return this.teacherArr;
  }
  addPrincipal(val) {
    this.principalarr.push(...val);
    return this.principalarr;
  }
  showPrincipal() {
    return this.principalarr;
  }
}

// DEFINING NEW SCHOOL
// let schUser = new School();
// schUser.addStd(["A", "B", "C"]);
// schUser.addTeacher(["D", "E", "F"]);
// schUser.addPrincipal(["G", "H", "I"]);

// CHECKING SCHOOL PROPERTIES
// console.log(schUser);
// console.log(schUser.showPrincipal());
// console.log(schUser.showTeacher());

// CHECKING IF LOCAL STORAGE CAN MODIFY DATA
// localStorage.setItem("school", JSON.stringify(schUser));
// let schoolUser =JSON.parse(localStorage.getItem("school"));
// schoolUser.teacherArr.push("Jsjkfhj");
// localStorage.setItem("school", JSON.stringify(schoolUser));
// console.log(schoolUser);

class Employee {
  constructor(name, address, phone, email, basicSalary, expenses) {
    this.name = name;
    this.id = 0;
    this.phone = phone;
    this.basicSalary = basicSalary;
    this.expenses = expenses;
  }
  getEmployeeDetails() {
    return `id:${this.id} 
    name: ${this.name}
    phone: ${this.phone}
    basic salary: ${this.basicSalary}
    expenses: ${this.expenses}
    `;
  }
  getSalary() {
    return this.basicSalary;
  }
}
class Teacher extends Employee {
  constructor(name, address, phone, email, basicSalary, expenses,classNo) {
    super(name, address, phone, email, basicSalary, expenses);
    this.classNo = classNo;
  }
  getTeacherDetails() {}

  
}
class Principal extends Employee {
  constructor(name, address, phone, email, basicSalary, expenses,PrincipalBonus) {
    super(name, address, phone, email, basicSalary, expenses);
    this.PrincipalBonus = PrincipalBonus;
  }
  getSalary() {}
}

class Student {
  constructor(stdId, stdName, stdLevel) {
    this.stdId = stdId;
    this.stdName = stdName;
    this.stdLevel = stdLevel;
  }
}

class Subject {
  constructor(sbjName, teacher, student) {
    this.sbjName = sbjName;
    this.teacher = teacher;
    this.student = student;
  }
}

const promptUser = (data) => {
  return prompt(data);
};

const saveSch = () => {
  let newSchool = new School();
  localStorage.length === 0 &&
    localStorage.setItem("school", JSON.stringify(newSchool));
};
// saveSch()

// let intro = "Welcome to my school!!!\n My name is Grace.";
// // alert(intro);

let help =
  "how can we help your ministry?\n 1. Add employee \n 2. Add Student. \n 3. Add subject \n 4. show subject \n 5. Display salaries of employees. \n 6. Finding the number of students registered in particular subject \n 7. exit";
let question = parseInt(promptUser(help));



switch (question) {
  // ADD EMPLOYEE
  case 1:
    let employeeTypeInput = "choose Employee \n 1. Teacher \n 2. Principal";
    let chooseEmplyeeType = promptUser(employeeTypeInput);

    // ADD TEACHER
    if (parseInt(chooseEmplyeeType) === 1) {
  
      saveSch() // CREATE A SCHOOL CLASS
      // mike,lagos,090300200400,mike.com,20000,2000,3
      const teacherBioInfo =
        "Fill in this data accordingly\n teacher's name,address,phone number,email address,teacher basic Salary,teacher's expenses,class number";
      let teacherData = promptUser(teacherBioInfo).split(",");

      const teacherUser = new Teacher(...teacherData);
      let schData = JSON.parse(localStorage.getItem("school"));
      schData.teacherArr.push(teacherUser);
      localStorage.setItem("school", JSON.stringify(schData));

      // `teacher${Math.round(Math.random() * 101)}`:
    }

    // ADD PRINCIPAL
    else if (parseInt(chooseEmplyeeType) === 2) {
      saveSch() // CREATE A SCHOOL CLASS
      // smiles,abj,0905004300200,smiles.com,2000,200,300

      const principalBioInfo =
        "Fill in this data accordingly\n the principal name,address,phone number,email,the basic Salary,living expenses,principal's bonus";
      let principalData = promptUser(principalBioInfo).split(",");

      const user = new Principal(...principalData);
      // console.log(schoolData)

      let schoolData = JSON.parse(localStorage.getItem("school"));      
      schoolData["principalArr"].push(user);
      localStorage.setItem("school", JSON.stringify(schoolData));
      alert(`Data saved`);
      // localStorage
    } else {
      alert(`Error, Data inputed is not a number`);
    }

    break;

  // ADD STUDENT
  case 2:
    let StdDataInput =
      "Input according to this manner \n student-Id,student-Name,student-Level";
    let stdInputData = promptUser(StdDataInput).split(",");
    let studentUser = new Student(...stdInputData);
    // 1,joshua,200

    let schoolData = JSON.parse(localStorage.getItem("school"));      
      schoolData["stdArr"].push(studentUser);
      localStorage.setItem("school", JSON.stringify(schoolData));
      alert(`Data saved`);

    // studentUser = JSON.stringify(studentUser);
    // localStorage.setItem(
    //   `student${Math.round(Math.random() * 101)}`,
    //   studentUser
    // );
    localStorage;
    break;

  // ADD SUBJECT
  case 3:
    const inputSubjectInfo = "Kindly fill accordingly \n ";
    const sujectData = promptUser();
    break;

  // SHOW SUBJECT
  case 4:
    break;

  // DISPLAY SALARIES OF EMPLOYEES
  case 5:
    let employeeInput = "choose Employee \n 1. Teacher \n 2. Principal";
    let chooseEmplyee = promptUser(employeeInput);
    // console.log(chooseEmplyee)
    break;

  // FINDING THE NUMBER OF STUDENT THAT REGISTERED FOR A PARTICULR SUBJECT
  case 6:
    break;

  // EXIT THE PROGRAM
  case 7:
    alert(`GOOD BYE`);
    localStorage.clear();
    break;
}
