function Print(n){
    for(let i=0;i<n;i++){
        let row="";
        //ith row=i+1 starts
        for(let j=0;j<i+1;j++){
            row=row+"*";
        }
        console.log(row);
    }
}
Print(10)  