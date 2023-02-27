function armstrong(num){
    let sum=0;
    let temp=num
    while(num!=0){
        let d=num%10;
        sum=sum+(d*d*d);
        num=Math.floor(num/10);
    }
    return temp===sum
}
console.log(armstrong(407));