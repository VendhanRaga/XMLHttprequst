//1.how to compare two json have the same properties without order 

let object1 = {
    name : "person 1",
    age:"5"
};

let object2 = {
    age : "5",
    nmae : "person1"
}

JSON.stringify(object1) === JSON.stringify(object2)
// false
    
isEqual(object1, object2)
// true

// Reference - https://lodash.com/docs/#isEqual

// If sequence is not going to change than
 JSON.stringify() //will be fast as compared to Lodash's 
 isEqual()   // method.

// Reference - https://www.measurethat.net/Benchmarks/Show/1854/0/lodash-isequal-test