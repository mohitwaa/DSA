function Grading(score){
    if(score>=90){return console.log(" Grade = A")}
    else if(score>=80 && score<=89) {return console.log( "grade B")}
    else if(score>=60 && score<=79){return console.log("Grade C")}
    else if (score<=59 && score>=33){return console.log("Grade D ")}
    else { console.log( "Grade F ")}
}
Grading(60);