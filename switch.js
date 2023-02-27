const checked_number=5;
let x=0;
switch(true){
    case (x>0):
        text=" The Number Is Positive";
        break;
    case(x===0):
        text=" The Number Is Zero "
        break;
    case(x<0):
        text="The Number is Negative";
        break;
    default:
        text="No Value Found ";

}
console.log(text);