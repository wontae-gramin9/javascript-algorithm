function binarySearch(arr, trg) {
  let left = 0,
    right = arr.length - 1,
    middle = Math.floor((left + right) / 2)

  while (arr[middle] !== trg && left <= right) {
    if (arr[middle] > trg) right = middle - 1
    else left = middle + 1

    middle = Math.floor((left + right) / 2)
  }

  if (arr[middle] === trg) return middle
  return -1
}

console.log(binarySearch([1, 2, 6, 7, 34, 55, 87, 99], 5));
console.log(binarySearch([1, 2, 6, 7, 34, 55, 87, 99], 6));
console.log(binarySearch([1, 2, 6, 7, 34, 55, 87, 99], 84));
console.log(binarySearch([1, 2, 6, 7, 34, 55, 87, 99], 87));
console.log(binarySearch([1, 2, 6, 7, 34, 55, 87, 99], 99));