
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// recursive function to get index betn 0 to 25 when offset is more than 25 and less than 0
const getNewIndex = (index)=>{
    if(index>=0 && index <26) return index;
    if(index<0) return getNewIndex(26+index);
    return getNewIndex(index- 26);
}

const caeserCipher = (string, offset)=>{
    let newString = "";
    // if the char is not an alphabet adds the char and returns back to start of loop
    for(let i=0;i<string.length;i+=1){
        if(!alphabet.includes(string[i].toLowerCase()) || !isNaN(string[i])){
            newString+=string[i];
            continue;
        }
        // checking index in lowercase
        const alphabetIndex = alphabet.indexOf(string[i].toLowerCase());
        let newIndex = alphabetIndex+offset;// adding the offset
        newIndex = getNewIndex(newIndex);
        if(!alphabet.includes(string[i])){// for uppercase letter as alphabet contains lowercase alphabets
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