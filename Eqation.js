function Equation(a,b,c){
    const value=b*b-4*a*c;
    if(value===0){ 
        return -1*(b/(2*a));
    }
    else if(value>0){
        const num1=-b+Math.sqrt(value);
        const num2=-b-Math.sqrt(value);
        const root1=num1/(2*a);
        const root2=num2/(2*a);
        var arr=[];
        arr.push(root1);
        arr.push(root2);
        return console.log(arr);
    }
    else {
        return " No Roots Exists";
    }
}
Equation(1,5,1)