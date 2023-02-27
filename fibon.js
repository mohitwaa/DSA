function printfibon(n){
    let a=0;
    let b=1;
    console.log(a);
    while(a+b<n){
        console.log(a+b)
        a=b;
        b=a+b;
    }
}
printfibon(100)