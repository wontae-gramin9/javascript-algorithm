// mergeSort처럼 (원소가 0개, 1개인 array는 항상 sorted되었다)는 걸 이용
// 아무 인덱스나 상관없으니 pivot을 뽑아서
// pivot보다 작은 값은 왼쪽으로, 큰 값은 오른쪽으로 싹 다 민 뒤
// pivot을 있어야 할 자리로 나눈다
// 를 원소가 0, 1인 array가 남을 때까지 계속 반복

const largeArray = Array.from({ length: 6 }, () => (
  Math.floor(Math.random() * 10)
))

function quickSort(arr) {

  let left = quickSort()
  let right = quickSort()
}

// partition(pivot) helper function
// 피봇을 정하고, 왼/오에 작고 큰 값을 재배치하는 함수
// 1. 새로운 arr를 만드는게 아닌 기존의 arr를 재배치한다
// 2. 피봇의 인덱스를 return한다 
// 이상적으로는 pivot이 median이 되는 것이 가장 빠르지만, 코드가 이를 알 수는 없다
// 여기서는 항상 첫번째 원소를 선택할 것

function pivot(arr, start = 0, end = arr.length) {
  let pivotIdx = 0
  let pivot = arr[pivotIdx]

  for (let i = start; i < end; i++) {
    if (pivot > arr[i]) {
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]]
      pivotIdx++
    }
  }

  return
}

console.log('largeArray: ', largeArray);
const sortedArray = quickSort(largeArray)
console.log('sortedArray: ', sortedArray);
