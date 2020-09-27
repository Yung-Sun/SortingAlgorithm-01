// 判断两个值中的最小值并从小到大排序
let sort2 = ([a, b]) => (a < b ? [a, b] : [b, a]);

// 判断三个值中的最小值并从小到大排序
let sort3 = (arr) => {
  let min = Math.min.apply(null, arr);
  let minIndex = arr.indexOf(min);
  arr.splice(minIndex, 1);
  return (arr = [min].concat(sort2(arr)));
};

// 判断四个值中的最小值并从小到大排序
let sort4 = (arr) => {
  let min = Math.min.apply(null, arr);
  let minIndex = arr.indexOf(min);
  arr.splice(minIndex, 1);
  return (arr = [min].concat(sort3(arr)));
};

// 将数组从小到大排序
// 获取数组最小值及最小值的索引
let min = (arr) => Math.min.apply(null, arr);
let minIndex = (arr) => arr.indexOf(min(arr));

// 递归函数，主要思想是将最小值抽出来排在第一个，剩余数组继续抽最小值。
let sort = (arr) => {
  if (arr.length > 2) {
    let index = minIndex(arr);
    let min = arr[index];
    arr.splice(index, 1);
    return [min].concat(sort(arr));
  } else {
    return arr[0] < arr[1] ? arr : arr.reverse();
  }
};

// 将以下数组进行排序
let a = [5, 6, 21, 596, 57, 3, 1];
console.log(sort(a));
