/*
  Complexity:
    Time: O(n)
    Space: O(1)
*/

const search = (array, target) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 5, 1, 4, 9, 12, 45, 65, 72, 33, 19], 65));
console.log(search([1, 2, 5, 1, 4, 9, 12, 45, 65, 72, 33, 19], 99));
