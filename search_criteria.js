/* 
Given a search criteria object whose values will only be
primitives (ints, strings, booleans) and a list of objects.
return any object that matches all the key value pairs in the search
criteria object.
Bonus: write a 2nd solution using build in methods to practice functional
programming.
*/

const users = [
{ firstName: "Bob", lastName: "Bobbert", age: 31 },
{ firstName: "John", lastName: "Smith", age: 25 },
{ firstName: "Bob", lastName: "Smith", age: 27 },
{ firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
firstName: "Bob",
age: 31,
};
// const expected1 = [
//   { firstName: "Bob", lastName: "Bobbert", age: 31 },
//   { firstName: "Bob", lastName: "White", age: 31 },
// ];

const searchCriteria2 = {
lastName: "Smith",
};
// const expected2 = [
//   { firstName: "John", lastName: "Smith", age: 25 },
//   { firstName: "Bob", lastName: "Smith", age: 27 },
// ];


function findObjects(criteria, collection) {
    let newArr =[]
    for(item of collection) { //going through every item in collection
        let valid = true;
        for (key in criteria) {// going through every key in criteria
            if(item[key] !==criteria[key]) { // comparing the key of item to key of criteria
                valid=false;
            }
        }
        valid && newArr.push(item)
    }
    return newArr
}

console.log(findObjects(searchCriteria1, users))
console.log(findObjects(searchCriteria2, users))