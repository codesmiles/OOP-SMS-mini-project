Question: SCHOOL MANAGEMENT SYSTEM PROJECT				08/11/2022
I need a complete solution for this project
Use the OOP principles you have learnt so far to design and write a Javascript program for School Management System
Features
Add employee (Principal/Teacher) details.
Add Student details.
Add subject details.
Display salaries of employees.
Finding the number of students registered in  particular subject.
 
Classes of School Management System
School class (that contains main method)
Employee class
Principal class
Teacher class
Student class
Subject class
Explain the project
Employee class should contain:
Fields: Employee Name, Employee id, Employee Address, Employee phone number, Employee Email, Employee basicSalary, Employee liveExpenses
Constructors: no-args constructor, constructor that takes all fields and stores it in the class
Mutators &&  Accessors methods
toString() to print Employee details
Abstract method to calculate salary to employee. As name getSalary() method
 
Principal class that inherits Employee class should contain:
Fields: PrincipalBonus
Constructors: no-args constructor, constructor that takes all fields and store it in the class
Mutators &&  Accessors method
toString() to print Principal details
Calculate a total salary to Principal. As name getSalary() method
 
Teacher class that inherits Employee class should contain:
Fields: Number of classes he teaches (classNo)
Constructors: no-args constructor, constructor that takes all fields and store it in the class
Mutators &&  Accessors method
toString() to print Teacher details
Calculate a total salary to Teacher. As name getSalary() method
 
Notes:
The living expenses is only 10% of the basic salary
The teacher’s salary is the basic salary in addition to the living Expenses and 20 dinars are added to it for every class he teaches.
The principal’s salary is the basic salary in addition to the living Expenses and the Principal’s Bonus
 
Student class should contain
Fields: Student id, Student Name, Student level
Constructors: no-args constructor, constructor that takes all fields and store it in the class
Mutators &&  Accessors method
toString() to print Student details
 
Subject class should contain
Fields: Subject Name, Teacher Object, Student Object
Constructors: no-args constructor, constructor that takes all fields and store it in the class
Mutators &&  Accessors method
toString() to print Subject details
 
School class [that contains main method]
Create arraylist OR array of Students to store object of students.
Create object of Principal.
Create arraylist OR array of Teacher to store object of teachers.
Create arraylist OR array of Subject to store object of subjects.
 
When the program runs, the following choices appear
Add Employee.
Add Student.
Add Subject.
Show Subjects.
Show Employees Salaries.
Count student in any subject.
Exit
 
Notes:
When you choose 1 or 5 show display menu to choose 1. Principal	2. Teacher
When you choose 3 to add Subject:
1.	Display names that exists in  Teacher and Students
2.	Should choose object of student and object of Teacher from existing objects only. (Pass any object of student and object of teacher that does not exist. The course is not added)
When you choose 6 ask user to enter subject to know how many students are registerd in this subject.
Exit of project when choose 7 only