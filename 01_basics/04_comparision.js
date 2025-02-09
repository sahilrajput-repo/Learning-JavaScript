// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// JavaScript automatically converts numeric strings to numbers in comparisons.
// console.log("2" > 1);
// console.log("02" > 1);

// ****************Try to avoid the following conversions *********************************

// console.log(null > 0); // Comparison operators (>, <, >=, <=) convert null to 0.
// console.log(null == 0); // Equality (==) does not convert null to 0
// console.log(null >= 0); // This leads to unexpected behavior where null >= 0 is true, but null > 0 is false.


// In JavaScript, undefined is only loosely equal (==) to null, but not to any number.
console.log(undefined == 0);

// When using comparison operators (>, <, >=, <=), JavaScript attempts to convert undefined to a number.
// However, undefined is converted to NaN (Not-a-Number).
// Any comparison with NaN always results in false, so undefined > 0 is false.
console.log(undefined > 0); 
console.log(undefined < 0);


// The === (strict equality operator) compares both value and data type.
console.log("2" === 2); // "2" is a string, while 2 is a number. Since their types do not match, JavaScript does not perform type conversion, and the result is false.
