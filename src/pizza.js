module.exports = {
    Pizza: function(name, dough, baseFilling){
        this.name = name;

        this.composition = {
            dough : dough,
            baseFilling: baseFilling
        };

        this.isStandard = ()=>{
            let composition = this.composition;
            return composition.dough === 'thin' && composition.baseFilling === 'cheese';
        }
    }};