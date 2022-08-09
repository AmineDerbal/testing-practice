const reverseString = (str) => {
  let splitString = str.split("");

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("");

  return joinArray;
};

export default reverseString;
