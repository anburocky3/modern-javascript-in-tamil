// SchoolStudent, CollegeStudent, WorkingProfessional
// Parent class | base class
class Learner {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  uppercase() {
    return this.name.toUpperCase()
  }

  bio() {
    return `Hello my name is ${this.name} and i'm ${this.age} years old.`
  }
}

// child class | sub class | derived class
class SchoolStudent extends Learner {
  constructor(name, age, standard) {
    super(name, age)
    this.standard = standard
  }

  bio() {
    return super.bio() + ` Studying ${this.standard} standard.`
  }

  attendClass(className) {
    return `I'm attending ${className} class!`
  }
}

// CollegeStudent Class
class CollegeStudent extends Learner {
  constructor(name, age, year) {
    super(name, age)
    this.year = year
  }

  bio() {
    return super.bio() + ` Studying ${this.year} year in College`
  }
}

const learner1 = new Learner('Anbu', 27, 'Software Engineer')
console.log('Learner: ', learner1.bio())
console.log(learner1.name)

const schoolStudent = new SchoolStudent('Samantha', 14, '12th')
console.log('SchoolStudent:', schoolStudent.bio())
console.log('SchoolStudent:', schoolStudent.attendClass('P.T'))
console.log('SchoolStudent:', schoolStudent.attendClass('Maths'))

const collegeStudent = new CollegeStudent('Divya', 18, '1st')
console.log('collegeStudent:', collegeStudent.bio())

console.log(learner1.uppercase())
console.log(schoolStudent.uppercase())
