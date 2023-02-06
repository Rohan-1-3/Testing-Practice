/* eslint-disable no-restricted-globals */

const add = (a,b)=>{
    if(typeof(a) !== "number" || typeof(b) !== "number") return "Arguments contain a non-number";
    return a+b;
}
const subtract = (a,b)=>{
    if(typeof(a) !== "number" || typeof(b) !== "number") return "Arguments contain a non-number";
    return a-b;
}
const divide = (a,b)=>{
    if(typeof(a) !== "number" || typeof(b) !== "number") return "Arguments contain a non-number";
    return a/b;
}
const multiply = (a,b)=>{
    if(typeof(a) !== "number" || typeof(b) !== "number") return "Arguments contain a non-number";
    return a*b;
}

const calculator = {
    add,
    subtract,
    multiply,
    divide
};

export default calculator;
