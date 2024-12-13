const removeDuplicates = (arr: number[]): number[] => {
  const result = arr.filter((num, index) => arr.indexOf(num) === index);
  return result;
};

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
