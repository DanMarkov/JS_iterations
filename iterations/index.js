for (let counter = 2; counter <= 100; counter++) {
  let isSimple = true;
  for (let iterator = counter - 1; iterator > 1; iterator--) {
    isSimple = counter % iterator !== 0;
    if (!isSimple) {
      break;
    }
  }
  isSimple && console.log(counter);
}

