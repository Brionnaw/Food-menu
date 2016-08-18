class Food {
  foodName:string
  price:number
  constructor () {
    this.foodName = 'taco'
    this.price = 3.50
  }
  calculateTax() {
        return this.price * .15;
    }
}

  let food1 = new Food();
 let foodItem = <HTMLElement>document.getElementById("menu-items");
foodItem.innerHTML = `${food1.foodName} - $${food1.price} `; 
