/* eslint-disable no-restricted-globals */
/* eslint-disable no-continue */
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const getNewIndex = (index)=>{
    if(index>=0 && index <26) return index;
    if(index<0) return getNewIndex(26+index);
    return getNewIndex(index- 26);
}

const caeserCipher = (string, offset)=>{
    let newString = "";
    for(let i=0;i<string.length;i+=1){
        if(!alphabet.includes(string[i].toLowerCase()) || !isNaN(string[i])){
            newString+=string[i];
            continue;
        }
        const alphabetIndex = alphabet.indexOf(string[i].toLowerCase());
        let newIndex = alphabetIndex+offset;
        newIndex = getNewIndex(newIndex);
        if(!alphabet.includes(string[i])){
            const newAlphabet = alphabet.charAt(newIndex).toUpperCase();
            newString+=newAlphabet;
        }
        else{
            const newAlphabet = alphabet.charAt(newIndex);
            newString+=newAlphabet;
        }
    }
    return newString;
}

export default caeserCipher;