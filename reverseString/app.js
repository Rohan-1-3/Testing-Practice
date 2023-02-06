export default function reverse(string){
    if(typeof(string) !== "string") return "not a string";
    let newString = "";
    for(let i=string.length-1;i>=0;i-=1){
        newString+=string.charAt(i);// joining the string from behind into a new string
    }
    return newString;
}