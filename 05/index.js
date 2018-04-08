const exchanges = [
  [
    {symbol: 'ZXC', price: 213.4, volume: 12345},
    {symbol: 'GXC', price: 12.4, volume: 2345},
  ],
  [
    {symbol: 'ZCB', price: 123.4, volume: 21345},
    {symbol: 'GXR', price: 1.24, volume: 2354},
  ],
];

// add concatAll directly to the Array object
Array.prototype.concatAll = function concatAll() {
  // let results = [];

  // Will only flatten a 2-dimensional array
  // this.forEach(subArray => subArray.forEach(item => results.push(item)));

  return this.reduce((acc, subArray) => acc.concat(...subArray), []);
};

module.exports = exchanges;
