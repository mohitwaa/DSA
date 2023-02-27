function GenerateSumofDigits(Num){
    var output=0;
    while(Num!=0){
        output=output+Num%10;
        Num=parseInt(Num/10);
    }
    return output;
}
console.log(GenerateSumofDigits(111))