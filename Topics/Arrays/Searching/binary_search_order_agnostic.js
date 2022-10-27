function search(arr, target) {
  let s = 0;
  let e = arr.length;
  let m = s + Math.floor((e - s) / 2);
  let condition = arr[m] > arr[m + 1] ? 1 : 0; // descending
  while(s < e) {
    let m = s + Math.floor((e - s) / 2);
    let c = condition === 1 ? arr[m] > target : arr[m] < target;
    if(c) {
      s = m  + 1;
    } else {
      e = m;
    }
  }
  return s;
}

const print = console.log;

const a1 = [1, 2, 3, 4, 5];
const a2 = [5, 4, 3, 2, 1];
const target = 2;
let index1 = search(a1, target);
print('index =', index1, `a1[${index1}] = ${a1[index1]} = ${target}`);
let index2 = search(a2, target);
print('index =', index2, `a2[${index2}] = ${a2[index2]} = ${target}`);
