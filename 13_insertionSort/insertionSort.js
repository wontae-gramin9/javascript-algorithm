// 
// 어떨 때 좋은가?

let largeArray = Array.from({ length: 10 }, () => (
  Math.floor(Math.random() * 10)
))

function selectionSort(arr) {
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i] // 기억하고 있기 때문에 swap하지 않아도 된다
    // 반대방향
    for (var j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      // 이것때문에 
      arr[j + 1] = arr[j]
      count++
    }
    // j가 루프가 끝난 이후에도 필요하므로 let이 아닌 var를 사용한다
    // 루프가 끝나면 curVal을 자기보다 작은(arr[j] > curVal)값보다 앞으로
    arr[j + 1] = curVal
  }
  console.log(count)
  return arr
}


console.log('largeArray: ', largeArray);
const sortedArray = selectionSort(largeArray)
const worstScenario = selectionSort(largeArra[4, 3, 2, 1])

console.log('sortedArray: ', sortedArray);
console.log('worstScenario: ', worstScenario);

// P.S Online algorithm
// arr가 새로운 데이터를 실시간으로 받아낼 때 쓰기 좋다