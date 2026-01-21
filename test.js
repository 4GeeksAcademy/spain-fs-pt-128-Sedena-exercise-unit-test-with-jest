
test("One euro should be 1.18 dollars", function (){

    const { fromEurosToDollar } = require('./app.js');

    const dollars = fromEurosToDollar(3.5);

    const expected = 3 * 1.07; 

    expect(fromEurosToDollar(3)).toBe(3.21);

})

test("One Dollar should be 156 Yenes", function (){

    const { fromDollarToYen } = require('./app.js');

    const Yenes = fromDollarToYen(1);

    const expected = 1 * 156.5; 

    expect(fromDollarToYen(1)).toBe(156.5); 

})

test("One Yen should be 0.0048 Pounds", function (){

    const { fromYenToPound } = require('./app.js');

    const Pounds = fromYenToPound(1);

    const expected = 1 * 0.87; 

    expect(fromYenToPound(1)).toBe(0.87); 
    
})