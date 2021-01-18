const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function asd(...args) {
  const [ ...rest, last ] = args;
  console.log([...rest, last]);
}

asd(arr);