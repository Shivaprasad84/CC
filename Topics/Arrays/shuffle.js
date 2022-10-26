function shuffle(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i));
    swap(arr, i, randomIndex);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const arr = [8, 1, 4, 7, 2, 4, 3, 0, 1, 3];
shuffle(arr);
console.log(arr);
