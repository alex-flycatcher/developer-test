function next_binary_number(binary) {
  for (let i = binary.length-1; i >= 0; i--) {
    if (binary[i] === 1) {
      binary[i] = 0;
    } else if (binary[i] === 0) {
      binary[i] = 1;
      return binary;
    }
  }
  return [1, ...binary]
}

console.log(next_binary_number([1,0]));
console.log(next_binary_number([1,1]));
console.log(next_binary_number([1,1,0]));
console.log(next_binary_number([1,1,0,1,0]));
console.log(next_binary_number([1,1,1,1,1]));
console.log(next_binary_number([1,0,0,0,0,0,0,0,0,1]));