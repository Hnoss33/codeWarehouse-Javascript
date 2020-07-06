const menu = { 
    _courses: {
            appetizers: [],
            mains: [],
            dessert: [],
    },
    get appetizers(){
      return this._courses.appetizers
    },
    get mains(){
      return this._courses.mains
    },
    get dessert(){
      return this._courses.dessert
    },
    set appetizers(appetizers){
      this._courses.appetizers = appetizers;
    },
    set mains(mains){
      this._courses.appetizers = mains;
    },
    set dessert(dessert){
      this._courses.appetizers = dessert;
    },
    get courses() {
      return {
            appetizers: this.appetizers ,
            mains: this.mains,
            dessert: this.dessert,
      }
    }, 
    addDishToCourse(courseName, priceName, dishPrice) {
      const dish = {
            name: priceName,
            price: dishPrice
  };
  return this._courses[courseName].push(dish);
  
  },
  getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
  },
  generateRandomMeal() {
  const appetizers = this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('dessert');
  const totalPrice = appetizers.price + mains.price + dessert.price;
  return `Your meal is ${appetizers.name}, ${mains.name}, ... The price is ${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'mac Salad', 4.00);
  menu.addDishToCourse('appetizers', 'fish Salad', 4.2);
  menu.addDishToCourse('appetizers', 'tomato Salad', 4.50);
  
  menu.addDishToCourse('mains', 'beef Salad', 5.90);
  menu.addDishToCourse('mains', 'chiken Salad', 6.90);
  menu.addDishToCourse('mains', 'toffu Salad', 7.90);
  
  menu.addDishToCourse('dessert', 'beef Salad', 3.20);
  menu.addDishToCourse('dessert', 'beef Salad', 4.70);
  menu.addDishToCourse('dessert', 'beef Salad', 2.40);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);