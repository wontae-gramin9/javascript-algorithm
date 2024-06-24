// 루프 한번을 돌면서 최소값을 저장하고, 그 최소값을 맨 앞에 놓음


let largeArray = Array.from({ length: 6 }, () => (
  Math.floor(Math.random() * 10)
))

// n*n+1/2
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimumIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minimumIdx] > arr[j]) {
        minimumIdx = j // idx를 보는 것
      }
    }
    if (i !== minimumIdx) [arr[i], arr[minimumIdx]] = [arr[minimumIdx], arr[i]]
  }
  return arr
}


console.log('largeArray: ', largeArray);
const sortedArray = selectionSort(largeArray)
console.log('sortedArray: ', sortedArray);

// n*n+1/2
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = arr[i]
    let newMinimumIdx // 이게 undefined가 나오는 상황이 있음
    for (let j = i + 1; j < arr.length; j++) {
      // 새로운 최솟값이 나오지 않았다는 이야기
      if (minimum > arr[j]) {
        minimum = arr[j]
        newMinimumIdx = j
      }
    }
    // 새로 잡은 minimum보다 작은 값아 나오지 않았을 때는 바꾸지 않고
    // continue
    if (!newMinimumIdx) continue
    [arr[i], arr[newMinimumIdx]] = [arr[newMinimumIdx], arr[i]]
  }
  return arr
}


largeArray = Array.from({ length: 6 }, () => (
  Math.floor(Math.random() * 10)
))

console.log('largeArray: ', largeArray);
const mySortedArray = selectionSort(largeArray)
console.log('sortedArray: ', mySortedArray);
