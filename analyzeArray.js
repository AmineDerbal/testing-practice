const analyzeArray = (array) => {
  if (!Array.isArray(array)) {
    return {
      average: null,
      min: null,
      max: null,
      length: null,
    };
  }

  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
};

const getAverage = (array) => {
  let sum = array.reduce((prev, cur) => prev + cur, 0);
  console.log(sum);
  console.log(sum / array.length);
  return sum / array.length;
};

const getMin = (array) => {
  let min = "";
  array.forEach((element) => {
    if (min == "" || element < min) {
      min = element;
    }
  });
  console.log(min);
  return min;
};
const getMax = (array) => {
  let max = "";
  array.forEach((element) => {
    if (max == "" || element > max) {
      max = element;
    }
  });
  console.log(max);
  return max;
};
console.log(analyzeArray([5, 9, 4, 6]));
console.log(analyzeArray(58));

export default analyzeArray;
