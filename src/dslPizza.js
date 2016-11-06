import { Pizza } from './pizza'
export function DslPizza () {
    let composition = {
        name: "Standard",
        dough: 'thin',
        baseFilling: 'cheese'
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

    this.build = function () {
        return new Pizza(composition.name);
    };

    this.buildStandard = function () {
        return new Pizza(composition.name);
    }
}