export default function analyzeArray(arr){
    for(let i=0;i<arr.length;i+=1){
        if(typeof(arr[i])!=="number") return "not valid";
    }
    const average = (arr.reduce((prev, cur)=> prev+cur,0))/arr.length;
    const min = arr.reduce((current, previous) => Math.min(current, previous));
    const max = arr.reduce((current, previous) => Math.max(current, previous));
    return {
        "average": average,
        "min": min,
        "max": max,
        "length": arr.length,
    };
}