/* for this algorithm we are going to use
code Character from 33 to 127*/

const caesarCipher = (str, shift) => {
  shift = shift % 95;
  let newString = "";
  for (let char of str) {
    let code;
    if (char.charCodeAt(0) == 32) {
      code = 32;
    } else {
      code = char.charCodeAt(0) + shift;
      if (code > 127) code = code - 127 + 32;
      if (code < 33) code = 128 - (33 - code);
    }

    newString += String.fromCharCode(code);
  }

  return newString;
};
console.log(caesarCipher("space marine", 1));
export default caesarCipher;
