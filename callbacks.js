/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

//firstItem(foods, (firstItem) => {
//  console.log('The first item is ' + firstItem);
//});
//function firstItem(arr, cb){ 
//	cb(arr[0]);
//};

// Write a function called getLength that passes the length of the array into the callback

//getLength(foods, (length) => {
//  console.log('The length of the array is ' + length);
//});
//function getLength(foods, cb){ 
//	cb(foods.length);
//};

// Write a function called last which passes the last item of the array into the callback

//last(foods, (lastItem) => {
//  console.log('The last item in the array is ' + lastItem);
//});
//function last(foods, cb){
//	cb(foods[foods.length - 1]);
//	};

// Write a function called sumNums that adds two numbers and passes the result to the callback

//sumNums(5, 10, (sum) => {
//  console.log('The sum is ' + sum);
//});
//function sumNums(x, y, cb){ 
//	cb(x + y);
//};

// Write a function called multiplyNums that adds two numbers and passes the result to the callback

//multiplyNums(5, 10, (product) => {
//  console.log('The product is ' + product);
//});
//function multiplyNums(x, y, cb){ 
//	cb(x * y);
//};

// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

//contains(foods, 'ribeye', (result) => {
//  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
//});
//function contains(foods, item, cb){
//	cb(item in foods);
//};

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.

removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});
function removeDuplicates(foods, cb){
	var uniqueFoods = foods.filter(function(elem, pos){
	return foods.indexOf(elem)==pos;
});
  cb(uniqueFoods);
}
// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

//forEach(foods, (value, index) => {
//  console.log('${value} is at index ' + index);
//});
//function forEach(foods, cb){
//	for(var i = 0; i < foods.length; i++){
//		cb(foods[i], i);
//	};
//};
