// Klassen Student

class Student {
    constructor(name) {
      this.fullname = name;
      this.courses = [];
    }

    registerCourse(course){
        this.courses.push(course);
    }

    listCourses(){
        console.log(this.courses)
    }

}

export default Student