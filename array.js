//          array-1
// let n = Number(prompt(`n kiritilsin: `));
// let arr = [];

// for(i=1; i<=n; i++) {
//   let k;
//   if(i%2==1){
//     k=i;
//     arr.push(k);
//   }
// }
// console.log(arr);



//           array-2
let n = Number(prompt(`n kiritilsin: `));
let arr = [];

for(i=1; i<=n; i++) {
  k = 2**i;
  arr.push(k);
}
console.log(arr);