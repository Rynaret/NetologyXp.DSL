import { Pizzeria } from './pizzeria'
export function DslPizzeria () {

    var state = {
        standardPizzaPrice: 2,
    };

    this.withStandardPizzaPrice = (value)=>{
        state.standardPizzaPrice = value;
        return this;
    };

    this.build = function () {
        return new Pizzeria(state.standardPizzaPrice);
    }
}