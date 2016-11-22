import assert from 'assert'

import { NewPizza } from '../src/newPizza'
import { NewPizzeria } from '../src/newPizzeria'


suite('When standard Pizza Price is 2 dollars and order', ()=>{
    const standardPizzaPrice = 2;
    let pizzeria = new NewPizzeria()
        .withStandardPizzaPrice(standardPizzaPrice)
        .build();

    suite('is standard pizza', ()=>{
        test('then order amount is 2 dollars', ()=>{
            let pizza = new NewPizza()
                .withDough('thin')
                .withBaseFilling('cheese')
                .build();
            let order = [pizza];

            const orderAmount = pizzeria.calculatePrice(order);

            assert.equal(standardPizzaPrice, orderAmount);
        });
    });

    suite('is pizza with thin dough, base filling is tomato', ()=>{
        test('then order amount is the same as standard Pizza Price', ()=>{
            let pizza = new NewPizza()
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
            let pizza = new NewPizza()
                .withDough('thin')
                .withBaseFilling('cheese')
                .build();;
            let order = [pizza, pizza];

            const orderAmount = pizzeria.calculatePrice(order);

            assert.equal(standardPizzaPrice * order.length * 0.9, orderAmount);
        });
    });
});

suite('When order', ()=> {
    const meatAsBaseFillingPrice = 1.8;
    const italianDoughPrice = 0.6;
    const cheeseAsAdditionalFillingPrice = 0.3;
    const peperoniPrice = 2;
    const mozzarellaPrice = 2;
    let pizzeria = new NewPizzeria()
        .withBaseFillingPrice('meat', meatAsBaseFillingPrice)
        .withBaseFillingPrice('mozzarella', mozzarellaPrice)
        .withDoughPrice('italian', italianDoughPrice)
        .withAdditionalFillingPrice('cheese', cheeseAsAdditionalFillingPrice)
        .withAdditionalFillingPrice('peperoni', peperoniPrice)
        .build();

    suite('is pizza with meat as base filling, italian dough and additional filling cheese', ()=> {
        test('then order amount is sum of italian dough price + meat as base filling price + cheese as additional filling price', ()=> {
            let pizza = new NewPizza()
                .withBaseFilling('meat')
                .withDough('italian')
                .withAdditionalFilling('cheese')
                .build();
            let order = [pizza];

            const orderAmount = pizzeria.calculatePrice(order);

            assert.equal((meatAsBaseFillingPrice + italianDoughPrice + cheeseAsAdditionalFillingPrice).toFixed(2), orderAmount);
        });
    });

    suite('is Peperoni', ()=>{
        test('then order amount is 4 dollars', ()=> {
            let pizza = new NewPizza()
                .withDough('thin')
                .withBaseFilling('mozzarella')
                .withAdditionalFilling('peperoni')
                .build();
            let order = [pizza];

            const orderAmount = pizzeria.calculatePrice(order);

            assert.equal(peperoniPrice + mozzarellaPrice, orderAmount);
        });
    });
});