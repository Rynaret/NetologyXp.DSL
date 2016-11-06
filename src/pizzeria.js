export function Pizzeria(standardPizzaPrice, additionalFillingPrice, baseFillingPrice, doughPrice) {
    this.standardPizzaPrice = standardPizzaPrice;
    this.additionalFillingPrice = additionalFillingPrice;
    this.baseFillingPrice = baseFillingPrice;
    this.doughPrice = doughPrice;

    this.calculatePrice = (pizzas)=>{
        let pizzaPrice = 0;

        let standardPizzas = pizzas.filter(x => x.isStandard());
        let otherPizzas = pizzas.filter(x => !x.isStandard());

        let doughPrice = this.doughPrice;
        let additionalFillingPrice = this.additionalFillingPrice;
        let baseFillingPrice = this.baseFillingPrice;

        otherPizzas.forEach(pizza =>{
            let pizzaComposition = pizza.composition;

            if(pizzaComposition.dough === 'thin' && pizzaComposition.baseFilling === 'tomato'){
                pizzaPrice += this.standardPizzaPrice;
                return;
            }

            pizzaPrice += doughPrice[pizzaComposition.dough];
            pizzaPrice += additionalFillingPrice[pizzaComposition.additionalFilling];
            pizzaPrice += baseFillingPrice[pizzaComposition.baseFilling];
        });

        if(standardPizzas.length > 1){
            pizzaPrice += this.standardPizzaPrice * standardPizzas.length * 0.9;
        }else{
            pizzaPrice += this.standardPizzaPrice * standardPizzas.length;
        }

        return pizzaPrice;
    }
}