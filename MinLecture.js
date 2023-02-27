function minClassToAttend(m,n){
    // m = Total class , n = attended class
    var SeventyFive=Math.ceil(0.75*m)
    if(SeventyFive<=n){
        return console.log(" Already 75% ")

    }
    else(console.log(`${SeventyFive-n} More Class to Be Attended `))
}
minClassToAttend(20,5);