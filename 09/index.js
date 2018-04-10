const exchanges = [
  {
    name: 'NYSE',
    stocks: [
      {
        symbol: 'ASD',
        closes: [
          {price: 213.4, volume: 12345},
          {price: 214.4, volume: 12346},
          {price: 13.4, volume: 12343},
        ],
      },
      {
        symbol: 'DFG',
        closes: [
          {price: 213.4, volume: 12345},
          {price: 214.4, volume: 12346},
          {price: 13.4, volume: 12343},
        ],
      },
      {
        symbol: 'ZXC',
        closes: [
          {price: 213.4, volume: 12345},
          {price: 214.4, volume: 12346},
          {price: 13.4, volume: 12343},
        ],
      },
    ],
  },
];

Array.prototype.concatAll = function concatAll() {
  return this.forEach(subArray => subArray.forEach(item => results.push(item)));
};

module.exports = exchanges;
