var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumSales( company ){
  var sum = 0;
  for( var i = 0; i < company.sales.length; i++ ){
    sum += company.sales[i];
  }
  return sum;
}

function calculateSalesTax(sales, taxRates) {
  newObj = {}

  for( var i = 0; i < sales.length; i++ ){
    var salesSum = sumSales(sales[i]);
    var ithName = sales[i].name;
    if( newObj.hasOwnProperty(  ithName )) {
      newObj[ithName] = { totalSales: newObj[ithName].totalSales + salesSum,
                          totalTaxes: newObj[ithName].totalTaxes + salesSum*taxRates[sales[i].province] };
    }
    else {
      newObj[ithName] = { totalSales: salesSum, totalTaxes: salesSum*taxRates[sales[i].province] };
    }
  }
  return newObj;
}

var results = calculateSalesTax(companySalesData, taxRates);

console.log( results );
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/