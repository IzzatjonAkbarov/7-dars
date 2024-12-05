// function clac(a, cb) {
//   let b = 22;
//   cb(a + 5 + 22, b);
// }
// clac(5, (jami, b, d) => {
//   console.log(jami, b);
// });

// let target = 6;
// output = [3, 2, 4];
// count = "";
// for (i = 0; i < output.length; i++) {
//   //   console.log(output[i]);

//   for (j = i + 1; j < output.length; j++) {
//     if (output[i] + output[j] == target) {
//       count += i + j.toString();
//     }
//   }
// }
// console.log(count);
function myPowerUp(a) {
  return function (b) {
    return [a ** 2, b ** 2];
  };
}
console.log(myPowerUp(2)(3));
