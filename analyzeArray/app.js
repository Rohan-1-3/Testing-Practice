export default function analyzeArray(arr){
    for(let i=0;i<arr.length;i+=1){// if any array element contains anything else but number rejects
        if(typeof(arr[i])!=="number") return "not valid";
    }
    // storing sum in prev using reduce
    const average = (arr.reduce((prev, cur)=> prev+cur,0))/arr.length;
    // stores min and max in current and returns it for comparision with next element
    const min = arr.reduce((current, previous) => Math.min(current, previous));
    const max = arr.reduce((current, previous) => Math.max(current, previous));
    return {
        "average": average,
        "min": min,
        "max": max,
        "length": arr.length,
    };
}