/* eslint-disable no-restricted-globals */
export default function reverse(string){
    if(typeof(string) !== "string") return "not a string";
    let newString = "";
    for(let i=string.length-1;i>=0;i-=1){
        newString+=string.charAt(i);
    }
    return newString.toLowerCase();
}