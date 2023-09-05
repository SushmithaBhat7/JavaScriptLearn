const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var rotate = function (matrix) {
  let matLen = matrix.length;
  let temp = 0;
  for (let i = 0; i < matLen; i++) {
    for (let j = i; j < matLen; j++) {
      if (i !== j) {
        temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }

  //   for (let i = 0; i < matLen; i++) {
  //     for (let j = 0; j < matLen; j++) {
  //       let k = matLen - 1 - i;
  //       //   if (j !== k) {
  //       temp = matrix[i][j];
  //       matrix[i][j] = matrix[i][k];
  //       matrix[i][k] = temp;
  //       //   }
  //       console.log({ matrix });
  //     }
  //   }
  for (let i = 0; i < matLen; i++) {
    let start = 0;
    let end = matLen - 1;
    while (start < end) {}
  }
  return matrix;
};

console.log(rotate(matrix));
