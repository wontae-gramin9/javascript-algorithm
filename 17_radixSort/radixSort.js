// 버블sort는 흔히 말해 n*(n+1)/2를 생각하는데(루프 한번당 원소 하나를 덜 비교해도 됨)
// 끝에 가장 큰 원소가 오는게 확실하기에 끝을 생략하면 되는 것이지
// 앞을 생략하는것이 아니다.

const largeArray = Array.from({ length: 10 }, () => (
  Math.floor(Math.random() * 10)
))

// n*n
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

console.log('largeArray: ', largeArray);
const sortedArray = selectionSort(largeArray)
console.log('sortedArray: ', sortedArray);

// n*(n+1)/2
function optimizedBubbleSort(arr) {
  // 여기서 거꾸로 해도
  for (let i = arr.length; i > 0; i--) {
    // 여기서 j가 0부터 제대로 시작하고, 끝만 하나씩 줄어든다
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const optSortedArray = optimizedBubbleSort(largeArray)
console.log('sortedArray: ', optSortedArray);

// noSwap(already nearly sorted)
function noSwapBubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwap = false
      }
    }
    // swap이 되어서 false가 된 loop이후에
    // 어느 한 루프에서 false로 한번도 바뀌지 않았다? → 모든 원소가 정렬되었다는 것
    // 그러면 바로 다음 루프에서 정말로 false로 바뀌지 않는지 확인하고
    // 바뀌지 않았다면 그 루프에서 반복문을 끝낸다.
    if (noSwap) break
  }
  return arr
}

const nearlySortedArray = [8, 1, 2, 3, 4, 5, 6, 7]
const noSwapBubbleSortedArray = noSwapBubbleSort(nearlySortedArray)
console.log('noSwapBubbleSortedArray: ', nearlySortedArray);