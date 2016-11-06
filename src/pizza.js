module.exports = {
    Pizza: function(name, dough){
        this.name = name;

        this.pizzaComposition = {
            dough : dough,
        };

        this.isStandard = ()=>{
            return this.name === 'Standard';
        }
    }};