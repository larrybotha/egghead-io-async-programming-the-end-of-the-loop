const {Observable} = Rx;

const parent = document.getElementById('parent');
const widget = document.getElementById('widget');

// create, from the mousedown event, an observable stream on the widget
const mouseDown$ = Observable.fromEvent(widget, 'mousedown');

// create, from the mousemove event, an observable stream on the parent
const parentMouseMove$ = Observable.fromEvent(parent, 'mousemove');
// and the same for the mouseup event
const parentMouseUp$ = Observable.fromEvent(parent, 'mouseup');
  },
  },
  }
);
