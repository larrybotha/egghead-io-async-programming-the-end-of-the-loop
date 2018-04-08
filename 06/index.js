const button = document.querySelector('.js-button');

// traditional event handler pattern for responding to user events
// const handleClick = () => {
//   alert('clicked');
//   button.removeEventListener('click', handleClick);
// };

// button.addEventListener('click', handleClick);
// What we're doing is changing thinking about events as objects with properties,
// and instead treat them as first-class collections

// Arrays are syncrhonous.
// In order to execute something after an array, we simply add the line to
// execute after the array.
// To catch an error, we place it in a try-catch block
try {
  [1, 2, 3].forEach(n => console.log(n));

  console.log('done');
} catch (e) {
  console.log('error');
}
