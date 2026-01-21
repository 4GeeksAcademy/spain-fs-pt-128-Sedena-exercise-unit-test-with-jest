const fromDollarToYen = (valorDollars) => {

    let valorYenes = valorDollars * 156;
    
    return valorYenes;
}


const fromEurosToDollar = (valorEuros) => {

     let valorDollars = valorEuros * 1.18;
    
    return valorDollars;
  
}


const fromYenToPound = (valorYenes) => {

      let valorPound = valorYenes * 0.0048;
    
      return valorPound;
     

}

module.exports = { fromEurosToDollar, fromYenToPound, fromDollarToYen }