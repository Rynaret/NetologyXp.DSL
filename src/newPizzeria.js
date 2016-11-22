import { Pizzeria } from './pizzeria'
export function NewPizzeria () {

    var state = {
        standardPizzaPrice: 2,
        additionalFillingPrice:{
            cheese:0.1,
            peperoni: 2
        },
        doughPrice: {
            italian:0.5
        },
        baseFillingPrice: {
            meat: 1,
            mozzarella: 2
        }
    };

    this.withStandardPizzaPrice = (value)=>{
        state.standardPizzaPrice = value;
        return this;
    };

    this.withAdditionalFillingPrice = (additionalFillingName, additionalFillingPrice)=>{
        state.additionalFillingPrice[additionalFillingName] = additionalFillingPrice;
        return this;
    };

    this.withBaseFillingPrice = (baseFillingName, baseFillingPrice)=>{
        state.baseFillingPrice[baseFillingName] = baseFillingPrice;
        return this;
    };

    this.withDoughPrice = (doughName, doughPrice)=>{
        state.doughPrice[doughName] = doughPrice;
        return this;
    };


    this.build = function () {
        return new Pizzeria(state.standardPizzaPrice, state.additionalFillingPrice, state.baseFillingPrice, state.doughPrice);
    }
}