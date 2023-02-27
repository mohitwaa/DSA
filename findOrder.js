function findOrder(a,b,c){
    if(a>b && b>c){
        console.log(" Decreasing Order")
    }
    else if (a<b && b<c){
        console.log("Increasing Order")
    }
    else {
        console.log("Neither Increasing Or Decreasing Order")
    };
}
findOrder(3,5,1);