let person = {
  firstName: 'Chandler',
  lastName: 'Bong',
  age: 34
}

person.lastName = 'Bing'

// console.log(person.lastName)

let meal = {
  appetizer: 'rolls',
  entree: 'New York Strip, Medium Rare',
  dessert: 'Fried Ice Cream',
  drink: 'Mr. Pib'
}

// let nextBest = 'Mr. Pib' or meal['drink']
// let appetizer = 'rolls' or meal.appetizer
// let dessert = 'Fried Ice Cream' or meal.dessert
let {drink: nextBest, appetizer, dessert} = meal

// console.log(nextBest)

meal.sides = 'Fries'

// delete meal.dessert

// console.log(meal)
// console.log(dessert)

//for in loop
// for(attribute in meal){
//   console.log(`My ${attribute} was ${meal[attribute]}`)
// }

class Pet{
  constructor(name, nickname, weight){
    this.name = name,
    this.nickname = nickname,
    this.weight = weight
  }

  petAnimal() {
    console.log(`You pet ${this.nickname}`)
  }
}

class Dog extends Pet {
  constructor(name, nickname, weight, tricks){
    super(name, nickname, weight)
    this.tricks = tricks
  }

  bark(){
    console.log('Arf')
  }

  canDo(){
    console.log(`${this.name} can do ${this.tricks}`)
  }
}

class Puppies extends Dog {
  constructor(name, nickname, weight, tricks, training){
    super(name, nickname, weight, tricks)
    this.training = training
  }

  trained(num){
    this.training += num
  }
}

class Cat extends Pet {
  constructor(name, nickname, weight, temperment){
    super(name, nickname, weight)
    this.temperment = temperment
  }

  attacks(){
    if(this.temperment == 'mean'){
      console.log(`${this.name} bite and scratched you`)
    } else {
      this.petAnimal()
    }
  }
}

let lassie = new Puppies('Lassie', 'Dogo', 15, 'Jump through hoops', 1)
let charles = new Cat('Charles', 'Charlie', 15, 'nice')
// console.log(lassie)
// console.log(charles.weight)

// charles.attacks()
// lassie.bark()
// lassie.canDo()
// lassie.petAnimal()