class School { 
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level; 
      this._numberofStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents() {
      return this._numberofStudents;
    }
  
    set numberOfStudents(value){
      if(value.isNan()) {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }else{
        this._numberofStudents = value;
      }
    }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberofStudents} at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
      const randInt = Math.floor(substituteTeachers.length * Math.random()); 
      return substituteTeachers[randInt];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
  super(name, 'primary', numberOfStudents);
  this._pickupPolicy = pickupPolicy;
    }
  
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  get sportsTeams() {
    return this._sportsTeams;
    }
  }
  
  const LorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13' );
  
  LorraineHansbury.quickFacts();
  
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);