const button = document.querySelector('.js-button');

const click$ = Rx.Observable.fromEvent(button, 'click');
const point$ = click$.map(({clientX, clientY}) => ({x: clientX, y: clientY}));

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
