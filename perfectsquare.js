//  Product of Same number 



function isPerfect(n){
let ans=false;
for(let i=1;i*i<=n;i++){
    if(i*i===n){
        ans=true;
        break;
    }
}

return ans; }
const ans=isPerfect(143);
console.log(ans);