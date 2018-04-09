const button = document.querySelector('.js-button');

const click$ = Rx.Observable.fromEvent(button, 'click');


    subscription.unsubscribe();
  },
  function onError(err) {
    console.log('error', err);
  },
  function onComplete() {
    console.log('done');
  }
);
