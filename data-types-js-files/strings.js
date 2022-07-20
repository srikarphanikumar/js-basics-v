console.clear();
console.log('********* STRINGS **********');


var city1 = 'pittsburgh';
console.log('City-1: ', city1);
var city2 = 'ny';
console.log('City-2: ', city2);

var city3 = '           Hyderabad        ';
console.log('City-3: ', city3);

var para1 = 'This is my name';
console.log('Para1: ', para1);

/** 
 * Strings start with 0-index
 * Operations: 
 * 
 * 1) length: Calculate the length of the string
 * 2) Uppercase: convert everything to uppercase
 * 3) lowercase: convert everything to lowercase
 * 4) CharAt(): gives you a character at a specified index--------
 * 5) indexOf(): gives you first index of a particular character---
 * 6) concat() and +
 * 7) slice()
 * 8) split();
 * 9) replace()
 * 10) lastIndexOf()
 */


/** 
 * Practice Question
 * Given string1 = 'Hello, I live in Hyderabad, which is in India';
 * Given string2 = 'India is a part of Asia'
 * 
 * 
 * find character at 10th position in string1 & string2
 * find index of the word 'India' in string1 & string2
 * join 2 strings
 * Retrieve the words: 'I live in Hyderabad' from string1
 * Retrieve the word: 'is a part of' from string2
 * Calculate number of words in string1 & string2
 * 
 *  Replace india with usa and asia with north america
 * 
 *  find last index of the letter 'a' in string1 and string2
 */


 console.log('********* LENGTH ************')
//length
console.log('city1 length: ', city1.length);
console.log('city2 length: ', city2.length);
console.log('city3 length: ', city3.length);
console.log('para1 length: ', para1.length);
console.log('                              ');

console.log('******* Upper and Lower *********')
//upper and lower cases
var lowerToUpper = 'lowertoupper';
console.log('lowerToUpper: ', lowerToUpper);
console.log('lowerToUpper using uppercase: ', lowerToUpper.toUpperCase());

var upperToLower = 'ABCDEFGH';
console.log('upperToLower: ', upperToLower);
console.log('upperToLower using lowercase: ', upperToLower.toLowerCase());
console.log('                              ');


console.log('******** CharAt() *********')
//CharAt()
// takes in an index and returns a character
var str1 = 'hyderabad';
console.log('Str1: ', str1);
console.log('Str1 length: ', str1.length)
console.log('Str1 character at index - 0: ', str1.charAt(0));
console.log('Str1 character at index - 2: ', str1.charAt(2));
console.log('Str1 character at index - 3: ', str1.charAt(3));
console.log('Str1 character at index - 4: ', str1.charAt(4));
console.log('Str1 character at index - 20: ', str1.charAt(20));
console.log('                              ');


console.log('******** indexOf() *********')
//indexOf()
// opposite of charAt()
// takes in a character and returns the first instance of that character in the given str
var str2 = 'hyderabad';
console.log('Str2: ', str2);
console.log('Str2 length: ', str2.length)
console.log('Str2 indexOf - a: ', str2.indexOf('a'));
console.log('Str2 indexOf - b: ', str2.indexOf('b'));
console.log('Str2 indexOf - d: ', str2.indexOf('d'));
console.log('Str2 indexOf - h: ', str2.indexOf('h'));
console.log('Str2 indexOf - z: (not in str) ', str2.indexOf('z'));

var para2 = 'this is a javascript basics course';
console.log('para2: ', para2);
console.log('para2 indexOf - javascript: ', para2.indexOf('javascript'));

// lastIndexOf();
console.log('Str2 last indexOf - a: ', str2.lastIndexOf('a'));

console.log('                              ');


console.log('******** concat() *********')
// concat()
var firstName = 'John';
console.log('firstName: ', firstName);
var lastName = 'Smith';
console.log('lastName: ', lastName);

// way-1: using traditional concat
var fullName = firstName.concat(' ').concat(lastName);
console.log('Full Name: ', fullName);

var fullNameBackWards = lastName.concat(' ').concat(firstName)
console.log('FullNameBackWards: ', fullNameBackWards);

// way-2: easy and efficient way
var fullNameUsingSecondWay = firstName + ' ' + lastName;
console.log('Full Name using second-way: ', fullNameUsingSecondWay);
console.log('                              ');


console.log('********* SLICE ************')
//slice: retrieve a part of the string
/** 
 *  two arguments: 
    1) starting value 
    2) ending value (but returns until endingValue-1)
*/ 
var superCar = 'Supercar';
console.log('Supercar: ', superCar);
console.log('First 5 characters: ', superCar.slice(0,5)); // super
console.log('3-6 characters: ', superCar.slice(3,6)); // erc
console.log('                              ');


console.log('********* Split ************')
//split
var para3 = 'Hi How are you?';
console.log('para3: ', para3);
var numberOfWords = para3.split(' ');
console.log('numberOfWords: ', numberOfWords);

var url = 'https://www.microsoft.com/en-us?token=abc123';
console.log('Url: ', url);
var languageArray = url.split('/');
console.log('LanguageArray: ', languageArray);
var language = languageArray[languageArray.length-1];
console.log('language: ', language);

var token = url.split('?');
console.log('Token: ', token)
console.log('                              ');


console.log('********* Replace ************')

// replaces first instance of target character/element with intended replacement 
// character/element
var originalStr = 'pittsburgh';
var replacedStr = originalStr.replace('t', 'f');
console.log('originalStr: ', originalStr);
console.log('replacedStr: ', replacedStr);

var allTsReplacedWithFs = originalStr.replaceAll('t', 'f')
console.log('allTsReplacedWithFs: ', allTsReplacedWithFs);

console.log('                              ');

