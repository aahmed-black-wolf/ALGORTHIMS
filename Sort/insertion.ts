const insertionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    const numToInsert = arr[i];
    let inserterElement = i - 1;

    while (inserterElement >= 0 && numToInsert < arr[inserterElement]) {
      arr[inserterElement + 1] = arr[inserterElement];
      inserterElement--;
    }

    arr[inserterElement + 1] = numToInsert;
  }

  console.log(arr);
};

insertionSort([5, 3, 4, -1, 2, -3, 0]);
