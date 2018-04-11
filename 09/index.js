const exchanges = [
  {
    name: 'NYSE',
    stocks: [
      {
        symbol: 'ASD',
        closes: [
          {price: 213.4, date: new Date(2014, 11, 23)},
          {price: 214.4, date: new Date(2014, 11, 24)},
          {price: 13.4, date: new Date(2014, 11, 25)},
        ],
      },
      {
        symbol: 'DFG',
        closes: [
          {price: 213.4, date: new Date(2014, 11, 23)},
          {price: 214.4, date: new Date(2014, 11, 24)},
          {price: 13.4, date: new Date(2014, 11, 25)},
        ],
      },
      {
        symbol: 'ZXC',
        closes: [
          {price: 213.4, date: new Date(2014, 11, 23)},
          {price: 214.4, date: new Date(2014, 11, 24)},
          {price: 13.4, date: new Date(2014, 11, 25)},
        ],
      },
    ],
  },
];

Array.prototype.concatAll = function concatAll() {
  let results = [];

  this.forEach(subArray => subArray.forEach(item => results.push(item)));

  return results;
};

debugger;

const christmasEveCloses = exchanges
  // first level of nesting
  .map(exchange =>
    exchange.stocks
      // second level of nesting
      .map(stock =>
        stock.closes
          .filter(
            close => close.date.getMonth() == 11 && close.date.getDate() == 24
          )
          .map(close => ({
            symbol: stock.symbol,
            date: close.date,
          }))
      )
      // flatten second level
      .concatAll()
  )
  // flatten first level
  .concatAll();

christmasEveCloses.forEach(item => console.log(JSON.stringify(item, null, 2)));
