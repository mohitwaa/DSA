// Program to Reverse a String 

function ReversingString(String){
    let updated_string=""
    for(let i=String.length-1;i>=0;i--){
        updated_string +=String[i]
    }
    return updated_string;
}
console.log(ReversingString("Mohit Kumar"))
