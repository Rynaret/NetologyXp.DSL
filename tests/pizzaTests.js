import assert from 'assert'

import { DslPizza } from '../src/dslPizza'
import { DslPizzeria } from '../src/dslPizzeria'


suite('When standard Pizza Price is 2 dollars and order', ()=>{
    const standardPizzaPrice = 2;
    let pizzeria = new DslPizzeria()
        .withStandardPizzaPrice(standardPizzaPrice)
        .build();

    suite('is standard pizza', ()=>{
        test('then order amount is 2 dollars', ()=>{
            let pizza = new DslPizza()
                .buildStandard();
            let order = [pizza];

            const orderAmount = pizzeria.calculatePrice(order);

            assert.equal(standardPizzaPrice, orderAmount);
        });
    });

    suite('is pizza with thin dough, base filling is tomato', ()=>{
        test('then order amount is the same as standard Pizza Price', ()=>{
            let pizza = new DslPizza()
                .withBaseFilling('thin')
                .withBaseFilling('tomato')
                .build();
            let order = [pizza];

            const orderAmount = pizzeria.calculatePrice(order);

            assert.equal(standardPizzaPrice, orderAmount);
        });
    });

    suite('is 2 standard pizza', ()=>{
        test('then order amount is 90% of the sum of 2 standard pizzas', ()=>{
            let pizza = new DslPizza()
                .buildStandard();
            let order = [pizza, pizza];

            const orderAmount = pizzeria.calculatePrice(order);

            assert.equal(standardPizzaPrice * order.length * 0.9, orderAmount);
        });
    });
});