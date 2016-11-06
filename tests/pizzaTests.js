import assert from 'assert'

import { DslPizza } from '../src/dslPizza'
import { DslPizzeria } from '../src/dslPizzeria'


suite('When order', ()=>{
    suite('is standard pizza and standard Pizza Price is 2 dollars', ()=>{
        test('then order amount is 2 dollars', ()=>{
            const standardPizzaPrice = 2;
            let pizzeria = new DslPizzeria()
                .withStandardPizzaPrice(standardPizzaPrice)
                .build();
            let pizza = new DslPizza()
                .buildStandard();

            const orderAmount = pizzeria.calculatePrice(pizza);

            assert.equal(standardPizzaPrice, orderAmount);
        });
    });
});