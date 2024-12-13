{
  const sumArray = (arr: number[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };
  sumArray([1, 2, 3, 4, 5]);
}
