function freqRecursive(tChar,str){
    // base condition 
    if(str.length===0){
        return 0;
    }

    let resultCount=0;

    if(str[0]===tChar){
        resultCount=1
    }

    //resursive Equation 

    const count=freqRecursive(tChar,str.substr(1));
    return resultCount+count;
}
console.log(freqRecursive('e','relevel'));