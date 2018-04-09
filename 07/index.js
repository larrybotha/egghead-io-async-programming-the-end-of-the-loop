const button = document.querySelector('.js-button');

const click$ = Rx.Observable.fromEvent(button, 'click');
// we can use Observable.prototype.map to augment the click stream
// as Array.prototype.map does for arrays
const point$ = click$.map(({clientX, clientY}) => ({x: clientX, y: clientY}));

// instead of subscribing to the click stream, we subscribe to the point stream
// Before we subscribe to this observable no click handlers are added to the
// DOM. Obervables are instantiated lazily - they don't add any interaction or
// intent until they are going to be consumed with something like subscribe.
const subscription = point$.subscribe(
  function onNext(item) {
    alert(`clicked ${JSON.stringify(item, null, 2)}`);

    subscription.unsubscribe();
  },
  function onError(err) {
    console.log('error', err);
  },
  function onComplete() {
    console.log('done');
  }
);
