import { Pizza } from './pizza'
export function DslPizza () {
    let composition = {
        name: 'Standard',
        dough: 'thin',
        baseFilling: 'cheese',
        additionalFilling: ''
    };

    this.withName = function (name) {
        composition.name = name;
        return this;
    };

    this.withDough = function (dough) {
        composition.dough = dough;
        return this;
    };

    this.withBaseFilling = function (baseFilling) {
        composition.baseFilling = baseFilling;
        return this;
    };

    this.withAdditionalFilling = function (additionalFilling) {
        composition.additionalFilling = additionalFilling;
        return this;
    };

    this.build = function () {
        return new Pizza(composition.name, composition.dough, composition.baseFilling, composition.additionalFilling);
    };

    this.buildStandard = function () {
        return new Pizza(composition.name, composition.dough, composition.baseFilling);
    };

    this.buildPeperoni = function () {
        return new Pizza('Peperoni', 'thin', 'mozzarella', 'peperoni');
    }
}