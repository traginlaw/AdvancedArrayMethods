function holler() {
	console.log('Hey you');
}

const whisper = function () {
	console.log('psst I have a secret');
};

//store a function as a variable and you can callback it easily

//to execute a callBack function  whisper() will run the function that is stored in the whisper variable

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide(x, y) {
    return x / y
}

function power(x,y) {
    return x ** y
}

const mathFuncs = [add, subtract, multiply, divide,power]

//will store all the functions in one variable, dont put () after the names or it will just run all of the functions

//to run a specific function use

mathFuncs[3](10, 5)
//this will run the function in index 3, division

//you can also set a function to run at a specific time

setTimeout(whisper, 4000)
//whisper will run 4 seconds after load

doMath(a,b, mathFuncs){
   return mathFuncs(a,b)
    
}

// doMath(3,4, function(a,b){
//     console.log(a ** b);
// })

function doAllMath(a,b,mathFuncs){
    for(let func of mathFuncs){
        console.log(func,(a,b));
    }
}
//

const colors = ['teal', 'cyan', 'peach', 'purple']

colors.forEach(console.log)

//prints out each array item and an index and the entire array

colors.forEach(function(val){
    console.log(val.toUpperCase());
})

//or

function yell(val) {
    console.log(val.toUpperCase());
}

colors.forEach(yell)

//

// const prices = [30.99, 19.99, 2.50, 99.0]
// let total = 0
// prices.forEach(function(price){
//     total += price
// })

console.log(total);

const prices = [30.99, 19.99, 2.50, 99.00]
let total = 0
for (let price of prices) {
    total += price 
}

console.log(total);

//build forEach on your own

function forEach(arr, callback){
    for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i) 
    }
    return undefined
}

forEach(colors, function(color){
    console.log(colors.toUpperCase(),'at the index of', i);
})

colors.forEach(function(color, i){
    console.log(color.toUpperCase(), 'at index of', i);
})

const numbers = [21, 37,64,99, 144]
const negatives = numbers.map(function(num){
    return num * -1
})

const doubles = numbers.map(function(num){
    console.log(num* 2);
})

const todos = [
    {
    id: 1,
    text: 'walk the dog',
    priority: high
    },
    {
        id:2,
        text: 'walk the chickens',
        priority: 'medium'
    },
    {
        id: 3,
        text: 'feed the cats',
        priority: 'low'
    },
    {
        id: 4,
        text: 'put out the fire in my garage',
        priority: 'very High'
    }

];

const text = todos.map(function(todo){
    return todo.text
})

const links = Array.from(document.querySelectorAll('a'))
const urls = links.map(function(a){
    return a.href
})

//    Array.from(links)  

myMap([1,2,3], function(val){
    return val * 3
})

function myMap(arr, callback){
    const mappedArray = []
    for(let i =0; i< arr.length; i++){
    const val = callback(arr[i], i, arr)
        mappedArray.push(val)
    }
    return mappedArray
}

const priortyMap = myMap(todos, function(todo){
    return todo.priority
})

const repeatedStrings = myMap(['a', 'b', 'c', 'd', 'e']function(str, idx){
    return str.repeat(idx)
})

let letters = ['a', 'b', 'c', 'd', 'c']

const words = [ 
'immunoelectrophoretically',
'rotovator', 
'tsktsk',
'psychophysicotherapeutics',
'squirrelled',
'crypt',
'uncopyrightable',
'cysts',
'pseudopsuedohypoparathyroidism',
'unimaginatively'
];

const isVowel = function(char){
    'aeiou'.indexOf(char) !== -1
}

const containsVowel = function(word){
    for(let char of word){
    if(isVowel(char))
    return true
   } 
   return false
}

const longWords = words.filter(function(word){
return word.length >= 20 

})

const cOrUWords = words.filter(function(word){
    return w[0] === 'u' || w[0] === 'c'
})

const containsVowels = words.filter(containsVowel)
const noVowels = words.filter(function(word){
    return !containsVowel(word)
})

const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')

Array.from(allCheckboxes)
//creates an array of the checkboxes and their status

const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked
})

checked.length //shows how many boxes are checked 

checked.map(function(checkboxes){
    return checkboxes.parentElement.innerText
})
//will return an array of the text of the li's that have a checked checkbox

function extractCompletedTodos(){
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]')

    return Array.from(allCheckboxes).filter(function(box){
        return box.checked
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText
    })
}

//filter(arr, callbacks)

function myFilter(arr, callback){
    const filteredArray = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filteredArray.push(arr[i])
        }
    }
    return filteredArray
}

const shorties = myFilter(words, function(word){
    return word.length <= 10;
})

const everyOtherWord = myFiler(word, 1){
    
}