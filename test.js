
test("One euro should be 1.18 dollars", function (){

    const { fromEurosToDollar } = require('./app.js');

    const dollars = fromEurosToDollar(3.5);

    const expected = 3.5 * 1.18; 

    expect(fromEurosToDollar(3.5)).toBe(4.13);

})

test("One Dollar should be 156 Yenes", function (){

    const { fromDollarToYen } = require('./app.js');

    const Yenes = fromDollarToYen(1);

    const expected = 1 * 156; 

    expect(fromDollarToYen(1)).toBe(156); 

})

test("One Yen should be 0.0048 Pounds", function (){

    const { fromYenToPound } = require('./app.js');

    const Pounds = fromYenToPound(1);

    const expected = 1 * 0.0048; 

    expect(fromYenToPound(1)).toBe(0.0048); 
    
})