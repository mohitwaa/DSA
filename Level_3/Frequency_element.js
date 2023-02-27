str="relevel";
var targetChar="e";
function frequency_element(str,targetChar){
    var i=0,count=0;
    for(i=0;i<str.length;i++){
        if(str.charAt(i)===targetChar){
            count++
        }
    }
    console.log(count);
}
frequency_element(str,targetChar);