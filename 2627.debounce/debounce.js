function debounce (fn, t) {
  let timer = null;

  return function (...arg) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...arg)
    }, t);
  }
}

function debounce2 (fn, t) {
  let timer = null;

  return function (...arg) {
    if (timer !== null) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.call(this, ...arg)
    }, t);
  }
}


function debounce3 (fuc, delay) {
  let timer = null;

  return function (...arg) {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fuc.call(this, ...arg);
    }, delay);
  }
}

function debounce4 (fn, delay) {
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer)
    };

    timer = setTimeout((...args) => {
      fn.call(this, ...args)
    }, delay);
  }
}