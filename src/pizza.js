module.exports = {
    Pizza: function(name, dough, baseFilling, additionalFilling){
        this.name = name;

        this.composition = {
            dough : dough,
            baseFilling: baseFilling,
            additionalFilling: additionalFilling
        };

        this.isStandard = ()=>{
            let composition = this.composition;
            return composition.dough === 'thin' && composition.baseFilling === 'cheese';
        }
    }};