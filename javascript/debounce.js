let count = 0;
const getData = () => {
  console.log("Data Ffetching...", count++);
};

const debounce = (func, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);
