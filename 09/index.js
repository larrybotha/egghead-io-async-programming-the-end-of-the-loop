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
  let results;

  this.forEach(subArray => subArray.forEach(item => results.push(item)));

  return results;
};

module.exports = exchanges;
