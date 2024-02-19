// 10 (3p) 
// Använd ES6 moduler. Du ska exportera klasserna Student och Course genom att skapa filerna Student.js och Course.js.
// Skapa en tredje fil, main.js, där du importerar klasserna och skapar två olika studenter och lägger till två olika kurser till studenterna.
// Skriv även ut studententens kurser (listCourses()) samt information om kurserna (getCourseInfo()).
// main.js ska vara kopplat till index.html och informationen om studenterna och kurserna ska loggas ut i consolen.

import Student from "./student.js";
import Course from "./course.js";

const student1 = new Student("Sandra");
const student2 = new Student("Torsten");
const course1 = new Course("HTML", 10);
const course2 = new Course("CSS", 50);
const course3 = new Course("Javascript", 2000);
const course4 = new Course("Typescript",500);
student1.registerCourse(course1); 
student1.registerCourse(course2);
student2.registerCourse(course3); 
student2.registerCourse(course4);
student1.listCourses(); 
student2.listCourses();
course1.getCourseInfo(); 
course2.getCourseInfo();