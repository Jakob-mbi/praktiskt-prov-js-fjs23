// Klassen Course

class Course{
    constructor(name, yhp) {
        this.name = name;
        this.yhp = yhp;
    }
    getCourseInfo(){
        console.log(this.name+" "+this.yhp)
    }

}

export default Course