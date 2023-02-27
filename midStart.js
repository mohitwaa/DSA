function printPattern(n){

    let el=2*n-1;
  
    for(let i=0;i<n;i++){
  
      let stars=2*i+1;
      let space= (el-stars)/2;
  
      let pattern="";
  
      for(let j=0;j<space;j++){
        pattern+=" ";
      }
  
      for(let j=0;j<stars;j++){
        pattern+="*";
      }
  
      for(let j=0;j<space;j++){
        pattern+=" ";
      }
  
      console.log(pattern);
    }
  
  }
  
  printPattern(7);