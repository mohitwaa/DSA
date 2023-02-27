var inputArr=["data","atad","number","tada","adat","bernum"]
function printAnagram(arr){
    var size=arr.length;
    var map=new Map();

    const sortMethod=str=>str.split('').sort((a,b)=>a.localeCompare(b)).join('');

    for(let i=0;i<size;i++){
        var sortedword=sortMethod(arr[i]);


        if(map.has(sortedword)){
            map.get(sortedword).push(arr[i]);
        }


        else{
            map.set(sortedword,[arr[i]]);
        }
    }

    
    const result=[];
    for(const sortedAnagramKey of map.keys()){
        var anagramArray=map.get(sortedAnagramKey);
        result.push(...anagramArray);
    }
    console.log(result);
}
printAnagram(inputArr);