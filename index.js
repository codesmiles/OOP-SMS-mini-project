class School {
  constructor() {
    this.stdArr = [];
    this.teacherArr = [];
    this.principalarr = [];
  }

  addStd(val) {
    this.stdArr.push(...val);
    return this.stdArr;
  }
  showStd (){
    return this.stdArr  
  }
  addTeacher(val) {
    this.teacherArr.push(...val);
    return this.teacherArr;
  }
  showTeacher (){
    return this.teacherArr
  }
  addPrincipal(val) {
    this.principalarr.push(...val);
    return this.principalarr;
  }
  showPrincipal(){
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
  constructor(classNo) {
    this.classNo = classNo;
  }
  getTeacherDetails() {}
}
class Principal extends Employee {
  constructor(PrincipalBonus) {
    this.PrincipalBonus = PrincipalBonus;
  }
  getSalary() {
  }
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

// const promptUser = (data) => {
//   return prompt(data);
// };

// let intro = "Welcome to my school!!!\n My name is Grace.";
// // alert(intro);

// let help =
//   "how can we help your ministry?\n 1. Add employee \n 2. Add Student. \n 3. Add subject \n 4. show subject \n 5. Display salaries of employees. \n 6. Finding the number of students registered in particular subject \n 7. exit";
// let question = promptUser(help);

// console.log(typeof Number(question));

// switch (parseInt(question)) {
//   case 1:
//     let employeeTypeInput = "choose Employee \n 1. Teacher \n 2. Principal";
//     let chooseEmplyeeType = promptUser(employeeTypeInput);
//     // console.log(chooseEmplyeeType)

//     if (parseInt(chooseEmplyeeType) === 1) {
//       const teacherBioInfo =
//         "Fill in this data accordingly\n teacher's name,address,phone number,email address,teacher basic Salary,teacher's expenses,number of classes teacher teacher";
//       let teacherData = promptUser(teacherBioInfo).split(",");
//       const teacherUser = new Teacher(...teacherData);
//       localStorage.setItem(
//         `teacher${Math.round(Math.random() * 101)}`,
//         teacherUser
//       );
//       alert(`Data saved`);
//       // localStorage
//     } else if (parseInt(chooseEmplyeeType) === 2) {
//       const principalBioInfo =
//         "Fill in this data accordingly\n the principal name,address,phone number,email,the basic Salary,living expenses,principal's bonus";
//       let principalData = promptUser(teacherBioInfo).split(",");
//       const principalUser = new Teacher(...teacherData);
//       localStorage.setItem(
//         `principal${Math.round(Math.random() * 101)}`,
//         principalUser
//       );
//       alert(`Data saved`);
//       // localStorage
//     }

//     break;

//   case 2:
//     let StdDataInput =
//       "Input according to this manner \n student-Id,student-Name,student-Level";
//     let stdInputData = promptUser(StdDataInput).split(",");
//     let studentUser = new Student(...stdInputData);
//     studentUser = JSON.stringify(studentUser);
//     localStorage.setItem(
//       `student${Math.round(Math.random() * 101)}`,
//       studentUser
//     );
//     localStorage;
//     break;
//   case 3:
//     const inputSubjectInfo = "Kindly fill accordingly \n ";
//     const sujectData = primptUser();
//     break;
//   case 4:
//     break;

//   case 5:
//     let employeeInput = "choose Employee \n 1. Teacher \n 2. Principal";
//     let chooseEmplyee = promptUser(employeeInput);
//     // console.log(chooseEmplyee)

//     break;
//   case 6:
//     break;
//   case 7:
//     alert(`GOOD BYE`);
//     break;
// }
