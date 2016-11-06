export function Pizzeria(standardPizzaPrice) {
    this.standardPizzaPrice = standardPizzaPrice;

    this.calculatePrice = (pizzas)=>{
        let pizzaPrice = 0;

        let standardPizzas = pizzas.filter(x => x.isStandard());
        let otherPizzas = pizzas.filter(x => !x.isStandard());

        otherPizzas.forEach(pizza =>{
            let pizzaComposition = pizza.composition;

            if(pizzaComposition.dough === 'thin' && pizzaComposition.baseFilling === 'tomato'){
                pizzaPrice += this.standardPizzaPrice;
            }
        });

        if(standardPizzas.length > 1){
            pizzaPrice += this.standardPizzaPrice * standardPizzas.length * 0.9;
        }else{
            pizzaPrice += this.standardPizzaPrice * standardPizzas.length;
        }

        return pizzaPrice;
    }
}