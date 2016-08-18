var Food = (function () {
    function Food() {
        this.foodName = 'taco';
        this.price = 3.50;
    }
    Food.prototype.calculateTax = function () {
        return this.price * .15;
    };
    return Food;
}());
var food1 = new Food();
var foodItem = document.getElementById("menu-items");
foodItem.innerHTML = food1.foodName + " - $" + food1.price + " ";
