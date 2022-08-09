import analyzeArray from "./analyzeArray";
import caesarCipher from "./caesarCipher";
import calculator from "./calculator";
import capitalize from "./capitalize";
import reverseString from "./reverseString";

test("capitalisation of String", () => {
  expect(capitalize("foul-play")).toBe("Foul-play");
});

test("reverse a string", () => {
  expect(reverseString("I am here most likley")).toBe("yelkil tsom ereh ma I");
});

test("calculator operations", () => {
  expect(calculator.add(879, 5457)).toBe(6336);
  expect(calculator.substract(8546, 9358)).toBe(-812);
  expect(calculator.divide(1, 0)).toBe(null);
  expect(calculator.divide(874, 4)).toBe(218.5);
  expect(calculator.multiply(59, 74)).toBe(4366);
});

test("analyse an array ", () => {
  expect(analyzeArray([5, 9, 4, 6])).toEqual({
    average: 6,
    min: 4,
    max: 9,
    length: 4,
  });
  expect(analyzeArray(test)).toEqual({
    average: null,
    min: null,
    max: null,
    length: null,
  });
});

test("caesar cipher algorithm", () => {
  expect(caesarCipher("space marine", 1)).toBe("tqbdf nbsjof");
  expect(caesarCipher("FREE pizza!", -10)).toBe("<H;; f_ppWv");
  expect(caesarCipher("myself yourself", 0)).toBe("myself yourself");
});
