const bubbleSort = (arr: number[], isDes: boolean = true) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let index = 0; index < arr.length - 1; index++) {
      const temp = arr[index + 1];
      if (arr[index] > arr[index + 1]) {
        arr[index + 1] = arr[index];
        arr[index] = temp;
        sorted = false;
      }
    }
  }

  return isDes ? arr : arr.reverse();
};

console.log(bubbleSort([1, 5, 65, 4, 2, 67, 577, -3, -4]));
