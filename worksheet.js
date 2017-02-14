// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.

// see test.js for example usage

var tile2 = {
    color: 'blue'
}


var flipColor = function(tileObj) {
    if(tileObj['color'] === 'blue') {
       tileObj['color'] = 'red'
       return tileObj
       }
    else if(tileObj['color'] === 'red') {
        tileObj['color'] = 'blue'
        return tileObj['color']
    }
}

console.log(flipColor(tile2))

// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

// see test.js for example usage

var customers = [
    {
        firstName: 'Sara',
        lastName: 'Buvioe'
    },
    {
        firstName: 'Bruce',
        lastName: 'Wayne'
    }
]


var getFullNames = function(customerObj) {
    var res = customerObj['firstName']+ ' '+customerObj['lastName']
    return res.split()

    
}
var customer = customers[1]
console.log(getFullNames(customer))

// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.

// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.


// see test.js for example usage


var dogObj = {
   name: 'bob',
   legs: '4',
   weight: '80 pounds',
   color: 'brown'
}            


var letterOne = function(array) {
    var One = array[0]
    One ='r'
    return One
}


var speak = function(str) {
    var arrayS = str.split(' ')
    for(var i=0; i<arrayS.length; i++) {
        return letterOne(arrayS[i])+arrayS[i].slice(1)
    }
}


var generateDog = function(inputName) {
    if(inputName === dogObj['name']) {
       return dogObj['color'] + ' ' + dogObj['legs']
   }       
}


console.log(generateDog('bob'))
console.log(speak('wuaf wuaf wuaf'))

// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

// see test.js for example usage

// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.


// check test.js for examples of how this function should be used.


var getCounts = function(str) {

    var strArray = str.split(/\W+/)
    var strArray = str.toLowerCase()

    
    var obj = {}
    for(var i=0; i<strArray.length; i++){
      if(!obj[strArray[i]]){  
          obj[strArray[i]] = 1
      }
        else{
            obj[strArray[i]] += 1
            }
    }
    return obj
    
}
    
console.log(getCounts('day sun day car day'))


// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.


var object = {
     occupants: 4,
     apartment_no: "2b",
     structural_integrity: "failing"
 }
// reverseObject(object) should yield: 
// {
//   4: 'occupants',
//   2b: 'apartment_no',
//   failing: 'structural_integrity'
// }
 var reverseObject = function(object) {
     var newObject = {}
      for(var key in object) {
          newObject[object[key]] = key
      }
     return newObject
 }
 
 
console.log(reverseObject(object))


var testobject = [{
     occupants: 4,
     apartment_no: "2b",
     structural_integrity: "failing"
 }
]


// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]


var reverseAll = function(arrayObj) {
    var newObjects = []
    for (var i = 0; i<arrayObj.length; i++){
        newObjects.push(reverseObject(arrayObj[i]))
    }
   return newObjects
}

console.log(reverseAll(testobject))



// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

