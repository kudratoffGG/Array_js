let n = Number(prompt(`n kiritilsin: `));
let arr = [];

for(i=1; i<=n; i++) {
  let k;
  if(i%2==1){
    k=i;
    arr.push(k);
  }
}
console.log(arr);
console.log(arr[2]);
