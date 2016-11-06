export function Pizzeria(standardPizzaPrice, additionalFillingPrice, baseFillingPrice, doughPrice) {
    this.standardPizzaPrice = standardPizzaPrice;
    this.additionalFillingPrice = additionalFillingPrice;
    this.baseFillingPrice = baseFillingPrice;
    this.doughPrice = doughPrice;

    this.isExists = (item)=>{
        return typeof(item) !== 'undefined';
    };

    this.getPrice = (price, property)=>{
        return this.isExists(price[property]) ? price[property] : 0;
    };

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

            pizzaPrice += this.getPrice(doughPrice, pizzaComposition.dough);
            pizzaPrice += this.getPrice(additionalFillingPrice, pizzaComposition.additionalFilling);
            pizzaPrice += this.getPrice(baseFillingPrice, pizzaComposition.baseFilling);
        });

        if(standardPizzas.length > 1){
            pizzaPrice += this.standardPizzaPrice * standardPizzas.length * 0.9;
        }else{
            pizzaPrice += this.standardPizzaPrice * standardPizzas.length;
        }

        return pizzaPrice;
    }
}