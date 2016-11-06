import assert from 'assert'

import { DslPizza } from '../src/dslPizza'
import { DslPizzeria } from '../src/dslPizzeria'


suite('When order', ()=>{
    const standardPizzaPrice = 2;
    let pizzeria = new DslPizzeria()
        .withStandardPizzaPrice(standardPizzaPrice)
        .build();

    suite('is standard pizza and standard Pizza Price is 2 dollars', ()=>{
        test('then order amount is 2 dollars', ()=>{
            let pizza = new DslPizza()
                .buildStandard();

            const orderAmount = pizzeria.calculatePrice(pizza);

            assert.equal(standardPizzaPrice, orderAmount);
        });
    });

    suite('is pizza with thin dough, base filling is tomato', ()=>{
        test('then order amount is the same as standard Pizza Price', ()=>{
            let pizza = new DslPizza()
                .withBaseFilling('thin')
                .withBaseFilling('tomato')
                .build();

            const orderAmount = pizzeria.calculatePrice(pizza);

            assert.equal(standardPizzaPrice, orderAmount);
        });
    });
});