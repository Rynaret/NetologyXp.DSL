export function Pizzeria(standardPizzaPrice) {
    this.standardPizzaPrice = standardPizzaPrice;

    this.calculatePrice = (pizza)=>{

        let pizzaPrice = 0;

        pizzaPrice += pizza.isStandard() ? this.standardPizzaPrice : 0;

        return pizzaPrice;
    }
}