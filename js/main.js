let n=parseInt(prompt("fibonacci numbers less than"));
let i=0,j=1,k;
while(i<n){
    console.log(i);
    k=i+j;
    i=j;
    j=k;   
}