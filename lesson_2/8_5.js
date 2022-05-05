function makeMultipleLister(number) {
  return function() {
    for (let multiple = number; multiple < 100; multiple += 1) {
      if (multiple % number === 0) console.log(multiple);
    }
  };
}

let lister = makeMultipleLister(17);
lister();