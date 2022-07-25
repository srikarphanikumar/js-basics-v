console.clear();
console.log('********* NUMBERS **********');

/**
 * Integers(numbers without decimal points: Eg, 1, 10, -10 etc)
 *    - Positive integers : 1 to Infinity
 *    - Negative Integers : -Infinity to -1
 *    - 0
 * 
 * Decimal Points (Floating numbers: Eg: 1.03, -2.54 etc)
 *      - Positive integers : 1 to Infinity (including decimal points)
 *      - Negative Integers : -Infinity to -1 (including decimal points)
 *      - 0
 * 
 * Pi, e
 * 
 * Operations: 
 *  1) Add
 *  2) Sub
 *  3) Multiply
 *  4) Divide
 *  
 */


var num1 = 2;
var num2 = 3;
console.log('num1: ', num1);
console.log('num2: ', num2);


console.log('********* BASIC OPERATIONS ************')
// Addition: 
var add = num1 + num2;
console.log('num1 + num2: ', add);

// Subtraction
var sub = num1 - num2;
console.log('num1 - num2: ', sub);

// Multiplication
var product = num1 * num2;
console.log('num1 * num2: ', product);

// DIvision
/**
 *  2) 4 (2 <-- Quotient
 *     4
 *  ---------
 *      0 <--- Remainder
 *  ---------
 * 
 *  if remainder == 0; we call it even number
 *  if remainder !== 0; we call it odd number
 */

 var divisionResult1 = num1 / num2;
 console.log('num1 / num2: ', divisionResult1);

 /** (2/3)
 *  3) 20 (0.6 <-- Quotient
 *   - 18
 *  ---------
 *      2 <--- Remainder
 *  ---------
 * 
 *  if remainder == 0; we call it even number
 *  if remainder !== 0; we call it odd number
 */
 // Remainder
 var divisionResult2 = num1 % num2;
 console.log('num1 % num2: ', divisionResult2);
 console.log('                                      ')

 /** Operations Set-02 
  * Floating numbers: 
  * Precision: toPrecision()
  * Fixed: toFixed()
  * roundOff: round()
  *    ceil()
  *    floor()
  * squareRoot: sqrt()
  * power: pow()
  * min
  * max
 */

console.log('********* FLOATING: Fixed & Precision ************')
 var float1 = 4.234234234234234;
 console.log('Float1: ', float1);

 // Print only first 2 decimal points
 var first2DecimalPoints = float1.toFixed(2);
 console.log('first2DecimalPoints: ', first2DecimalPoints);

 var float2 = 3.141;
 var precisionTo2DigitsForFloat2 = float2.toPrecision(2);
 console.log('float2: ', float2);
 console.log('precisionTo2DigitsForFloat2: ', precisionTo2DigitsForFloat2);
 var float3 = 3.151;
 var precisionTo2DigitsForFloat3 = float3.toPrecision(2);
 console.log('float3: ', float3);
 console.log('precisionTo2DigitsForFloat3: ', precisionTo2DigitsForFloat3);
 console.log('                                      ')

 
console.log('********* FLOATING: Math.round() ************')
// Round
var float4 = 4.234234;
var roundOff = Math.round(float4);
console.log('Float4: ', float4);
console.log('roundoff for float4 : ', roundOff);
var float5 = 4.534234;
var roundOff2 = Math.round(float5);
console.log('Float5: ', float5);
console.log('roundoff for float5 : ', roundOff2);
 console.log('                                      ')
 
console.log('********* FLOATING: Math.ceil() ************')
// Ceil - up (remember like ceiling) it will scale up
var float6 = 4.234234;
var ceilResult = Math.ceil(float6);
console.log('Float6: ', float6);
console.log('ceilResult for float6 : ', ceilResult);
var float7 = 4.534234;
var ceilResult2 = Math.ceil(float7);
console.log('Float7: ', float7);
console.log('ceilResult for float7 : ', ceilResult2);
console.log('                                      ')

console.log('********* FLOATING: Math.floor() ************')
// floor - down (remember like flooring) it will scale down
var float8 = 4.234234;
var floorResult = Math.floor(float8);
console.log('Float8: ', float8);
console.log('floorResult for float8 : ', floorResult);
var float9 = 4.534234;
var floorResult2 = Math.floor(float9);
console.log('Float9: ', float9);
console.log('floorResult for float9 : ', floorResult2);
console.log('                                      ')

console.log('********* SquareRoot: Math.sqrt() ************')
// floor - down (remember like flooring) it will scale down
var num = 49;
var sqRt = Math.sqrt(num);
console.log('Sqrt for 49: ', sqRt)

var n2 = 1.44;
var sqrt2 = Math.sqrt(n2);
console.log('Sqrt for 1.44: ', sqrt2)
console.log('                                      ')


console.log('********* SquareRoot: Math.pow() ************')
// floor - down (remember like flooring) it will scale down
var n1 = 4;
var n2 = 3;
var power = Math.pow(n1, n2);
console.log('4 to the power of 3: 4^3 ', power)
console.log('2.2 to the power of 3.3: (2.2)^(3.3) ', Math.pow(2.2, 3.3))
console.log('                                      ')


console.log('********* Math.min() ************')
var min = Math.min(-1,-2,0,1,2);
console.log('min of -1,-2,0,1,2 : ', min)
console.log('                                      ')


console.log('********* Math.max() ************')
var max = Math.max(-1,-2,0,1,2);
console.log('max of -1,-2,0,1,2 : ', max)
console.log('                                      ')
