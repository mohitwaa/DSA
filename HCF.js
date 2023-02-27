// program to Find Hcf of two intrgers

let hcf_value;
const a=100;
const b=10;
for(let i=1;i<=a && i<=b;i++){
    if(a%i==0 && b%i==0){
        hcf_value=i;
    }
}
console.log(`HCF of ${a} and ${b} is ${hcf_value}`);
