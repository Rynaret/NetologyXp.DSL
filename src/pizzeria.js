export function Pizzeria(standardPizzaPrice) {
    this.standardPizzaPrice = standardPizzaPrice;

    this.calculatePrice = (pizza)=>{

        let pizzaComposition = pizza.composition;
        let pizzaPrice = 0;

        pizzaPrice += pizza.isStandard() ? this.standardPizzaPrice : 0;

        if(pizzaComposition.dough === 'thin' && pizzaComposition.baseFilling === 'tomato'){
            pizzaPrice += this.standardPizzaPrice;
        }

        return pizzaPrice;
    }
}