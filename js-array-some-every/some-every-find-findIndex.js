const words = [
	'immunoelectrophoretically',
	'rotovator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathroidism',
	'unimaginatively',
];

words.some(function (word) {
	return word.length > 25;
});
//true

words.some(function (word) {
	return word.indexOf('thyroid') !== -1;
});
//true

words.every(function (word) {
	return word.length > 5;
});
// this will return false because there are some words that are not Greater than 5(ie 6 or more letters)

//for this to return true
words.every(function (word) {
	return word.length >= 5;
});
//now it includes the words that have 5 or more letters

function allStrings(arr) {
	return arr.every(function (el) {
		return typeof el === 'string';
	});
}

const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	console.log(checkboxes);
	const allChecked = Array.from(checkboxes).every(function (checkbox) {
		return checkbox.checked;
	});
	console.log(allChecked);
	if (!allChecked) alert('PLEASE AGREE TO ALL TERMS!!!!');
});

function mySome(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) return true;
	}
	return false;
}
//

mySome([4, 5, 6, 7], function (n) {
	return n > 5;
});
// true because there are numbers that are greater than 5
mySome([4, 5, 6, 7], function (n) {
	return n > 10;
});
//false because there are no numbers greater than 10 in the array

mySome([4, 5, 6, 7], function (n) {
	return n === 7;
});
//true because there is at least one 7 in the array

function myEvery(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (!callback(arr[i], i, arr)) return false;
	}
	return true;
}

myEvery([4, 5, 6, 7], function (n) {
	return n > 5;
});
//false because all the elements are not greater than 5

mySome([4, 5, 6, 7], function (n) {
	return Number.isInteger(n);
});
//returns true if all the numbers are integers

mySome([4, 5, 6, 7, 4.5], function (n) {
	return Number.isInteger(n);
});
//returns false because 4.5 is not an integer

//find and find index

const scores = [
	0, 0, 0, 0, 0, 0, 0, 0, 55, 59, 69, 73, 73, 75, 79, 83, 88, 91, 93,
];

scores.find(function (score) {
	return score > 75;
});
//returns only the first thing it finds. so in this array it will return 79, and nothing else

scores.find(function (score) {
	return score > 100;
});
//returns undefined, there are no entries that are greater than a hundred

scores.find(function (score) {
	return score % 2 === 0;
});
//this will return 0 because zero is considered an even number for some reason. If there were no zeroes it would return 88

scores.find(function (score) {
	return score !== 0 && score % 2 === 0;
});
//This will return 88 because it is looking at all the scores that are not 0s

const evenScores = scores.filter(function (score) {
	return score % 2 === 0;
});
//filter is kind of like a find all. If you need to find all the items of a same type you could use filter as find only locates the first value of its type

const firstEven = scores.findIndex(function (score) {
	return score !== 0 && score % 2 === 0;
});
//This finds the index of the value, and it will return the first index that matches the parameters. This will return 'scores[16]' //=== 88
//indexOf requires you to know exactly what you are looking for

scores.findIndex(function (score) {
	return score > 100;
});
//this will return -1, meaning there is no index in the array for the

function partition(arr, pivot) {
	const pivotIndex = arr.findIndex(function (el) {
		return el > pivot;
		//you need to know the pivotIndex for the next step. To call  {partition(scores, 0)}
		//for this it will return with 8, which is where the first number greater than zero is located
	});
	console.log(pivotIndex);
	const left = arr.slice(0, pivotIndex);
	const right = arr.slice(pivotIndex);
	return [left, right];
}

//This will create two seperate arrays each with the numbers on that side of the pivot index

function myFind(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === true) return arr[i];
	}
}
//callback function that will loop over the array.

myFind(scores, function (score) {
	return score > 91;
});
// return (93)

myFind(scores, function (score) {
	return score > 100;
});
//return undefined (no scores greater than 100 appear in the array)

function myFindIndex(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr) === true) return i;
	}
	return -1;
}

myFindIndex(scores, function (score) {
	return score !== 0 && score % 2 === 0;
});

const nums = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85];

let total = 0;
for (let num of nums) {
	total += num;
}
console.log(total);
// adds them all together to get a total of 380

let min = nums[0];
for (let i = 1; i < nums.length; i++) {
	if (nums[i] < min) min = nums[i];
}
console.log(min);
//shows the lowest value = -2

let max = nums[0];
for (let i = 1; i < nums.length; i++) {
	if (nums[i] > max) max = nums[i];
}
console.log(max);
//shows the largest value = 99

const str = 'lollapalooza';
const charFreq = {};
for (let char of str) {
	if (charFreq[char]) {
		charFreq[char] += 1;
	} else {
		charFreq[char] = 1;
	}
}
//returns {l:4, o:3, a:3, p:1, z:1}

const oldWords = ['hello', 'I', 'love', 'you'];
oldWords.reduce(function (accum, nextWord) {
	console.log(accum, nextWord);
	return accum + nextWord;
});
// returns helloIloveyou

const midtermScores = [70, 88, 93, 94, 64, 62, 56];
midtermScores.reduce(function (min, nextScore) {
	if (nextScore < min) {
		return nextScore;
	}
	return min;
});
// returns 56

const minMidtermScore = midtermScores.reduce(function (min, nextScore) {
	return nextScore < min ? nextScore : min;
});
//returns 56
const maxMidtermScore = midtermScores.reduce(function (max, nextScore) {
	return nextScore > max ? nextScore : max;
});
//returns 94

const finalScores = [92, 93, 67, 56, 72, 99, 20];

const minFinalScore = finalScores.reduce(function (min, nextScore) {
	return nextScore < min ? nextScore : min;
});
//returns 20
const minOverallScore = finalScores.reduce(function (min, nextScore) {
	return nextScore < min ? nextScore : min;
}, minMidtermScore);
//returns 20
