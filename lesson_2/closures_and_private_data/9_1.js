function makeCounterLogger(startingNum) {
  return function(endingNum) {
    let count = startingNum;
    console.log(count);

    while (count !== endingNum) {
      if (count < endingNum) count += 1;
      if (count > endingNum) count -= 1;
      console.log(count);
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);