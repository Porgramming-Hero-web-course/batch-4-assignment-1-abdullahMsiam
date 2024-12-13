const removeDuplicates = (arr: number[]): number[] => {
  const result: number[] = arr.filter(
    (num, index) => arr.indexOf(num) === index
  );
  return result;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
