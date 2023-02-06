/* eslint-disable no-restricted-globals */
export default function capitalize(string){
    if(!isNaN(string) || (string.toLowerCase() === string.toUpperCase())) return "no valid";
    const generalizing = string.toLowerCase();
    let capital = generalizing.charAt(0).toUpperCase();
    for(let i = 1;i < generalizing.length;i+=1){
        capital+=generalizing.charAt(i)
    }
    return capital;
}