const button = document.querySelector('.js-button');

// traditional event handler pattern for responding to user events
// const handleClick = () => {
//   alert('clicked');
//   button.removeEventListener('click', handleClick);
// };

// button.addEventListener('click', handleClick);

// Instead we can treat clicks more like an array by creating a stream
// using Observable
const click$ = Rx.Observable.fromEvent(button, 'click');

// click$ now operates similar to an array
// [1, 2, 3].forEach(console.log.bind(console));

// use subscribe on Observable
// This now works the same as the event handler above
// We can't use map here for some reason
// We can't use try-catch here, because Observables are async -
// try-catch only works with syncrhonous code, and will have
// exited by the time an error is thrown.
// We thus have 3 callbacks that subscribe can take
const subscription = click$.subscribe(
  function onNext() {
    alert('clicked');

    // we can unsubscribe from the listener using the returned object
    // from stream$.subscribe
    subscription.unsubscribe();
  },
  function onError(err) {
    console.log('error', err);
  },
  function onComplete() {
    console.log('done');
  }
);

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
