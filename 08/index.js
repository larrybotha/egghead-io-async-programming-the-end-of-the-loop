const {Observable} = Rx;

const parent = document.getElementById('parent');
const widget = document.getElementById('widget');

// create, from the mousedown event, an observable stream on the widget
const mouseDown$ = Observable.fromEvent(widget, 'mousedown');

// create, from the mousemove event, an observable stream on the parent
const parentMouseMove$ = Observable.fromEvent(parent, 'mousemove');
// and the same for the mouseup event
const parentMouseUp$ = Observable.fromEvent(parent, 'mouseup');

// create a drag stream by mapping over the mouse down stream
const drag$ = mouseDown$
  // and augmenting the stream using map
  .map(() => {
    // by returning an observable stream the parent's mouse move event
    // up until there is mouse up inside the parent.
    // takeUntil 'completes' the collection when some other observable event
    // occurs, in this case, the
    const obs = parentMouseMove$.takeUntil(parentMouseUp$);

    return obs;
  })
  // The result is a nested observable - we have the parent mousedown stream,
  // which completes on mouse up, nested inside our mousedown stream.
  // As with a nested array, it's easier to work with the data if we flatten the
  // structure
  // If we didn't flatten the event, we'd receive a single observable every time
  // there is a mousedown event on the widget. What we want when we subscribe is
  // for the individual events to be made available. Flattening gives us the events
  // inside the observable
  .concatAll();

// subscribe to the drag stream, moving the widget's position whenever there are
// events in the stream
drag$.subscribe(
  function onNext(e) {
    widget.style.left = e.clientX + 'px';
    widget.style.top = e.clientY + 'px';
  },
  function onError(e) {
    // If something errors, we can catch it here without worrying about try-catch
    // blocks
    console.log(e);
  },
  function onCompleted() {
    // This observable will never complete because we're subscribing to DOM events
  }
);
