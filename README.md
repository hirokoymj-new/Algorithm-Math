# Algorithm - Math

## Table of contents
1. [Downward to the nearest integer](#downward-to-the-nearest-integer)
2. [Upward to the nearest integer](#upward-to-the-nearest-integer)
3. [Round the nearest integare](#round-the-nearest-integare)
4. [Is Integer?](#is-integer)
5. [Making Digit](#making-digit)
8. [Generate random int number from 5-7](#generate-random-int-number-from-5-7)


## Downward to the nearest integer
```js
Math.floor(1.6)	//1
```

## Upward to the nearest integer
```js
Math.ceil(1.4) //2
```

## Round the nearest integer
```js
Math.round(2.4); //2
Math.round(2.5); //3
```

## Is Integer or float?

Check for a remainder when dividing by 1. If a remainder is 0, the value is Integer. If not, it is float.


```js
function isInt(a){
	var flag = false;
	if( (a%1) ==0 ){
		flag = true;
	}
	return flag;
}
console.log(isInt(2.1)); // false
console.log(isInt(3)); // true
```

**Find a float in array.**

```
var array = [3, 4.5, 2, 6.3];

function findFloat(array){
	var result = [];

	array.forEach(function(value, index){
		if((value%1) !== 0){
			result.push(value);
		}
	});

	return result;

}

var floatNum = findFloat(array);
console.log(floatNum);//[ 4.5, 6.3 ]
```



## Making Digit
Creat a function to make digits. Given two arguments (number, nth) and if number is negative, it should conver to Interger. Example: findDigit(-43,5)); //00043

1. Use Math.abs() to convert negative number to integer.
2. Use Math.pow() to create nth digit. Example: 5th digit: 100000

```js
function makeDigit(number, nth){
	var tmp = 0;
	tmp = Math.pow(10, nth);
	tmp = tmp + Math.abs(number);
	var array = tmp.toString().split('');
	array.shift();
	var str = array.join('');

	return str;
}
console.log(makeDigit(-43,5));　//00043
```


1. If you don't know Math.abs() to convert negative number, it multiply by -1. Example: ``-43x-1 = 43``

```js
function makeDigit2(number, nth){

	number = number * -1;
	var sum = 1;
	for(var i=0; i<nth; i++){
		sum = sum * 10;
	}
	var output = sum + number;
	var array = output.toString().split('');
	array.shift();
	var str = array.join('');
	return str;
}
console.log(makeDigit2(-43, 5)); //00043
```



## Generate random int number from 5-7.

```js
//// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(5,8));//generate random 5,6,7.
```





## References:
- [stackoverflow - How do I check that a number is float or integer?](http://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer)
- [Mozilla Developer Network - Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)downw