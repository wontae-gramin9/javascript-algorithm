// combination of spliting up, merging and sorting(Divide&Conquer)
// 원소가 0개, 1개인 array는 항상 sorted되었다고 할 수 있다
// 즉 원래 array를 원소가 0, 1인 array로 쪼갠 뒤 
// "sorted된 array를 다시 sorting해서 붙이는 게 unsorted된 array를 붙이는 것보다 쉽다"
// 다시 build up

const largeArray = Array.from({ length: 1000 }, () => (
  Math.floor(Math.random() * 10)
))

function mergeSort(arr) {
  function merge(arr1, arr2) {
    let merged = [],
      i = 0,
      j = 0

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i++])
      }
      // else if (arr1[i] === arr2[j]) {
      //   result.push(arr1[i++])
      //   result.push(arr2[j++])
      // } 
      else { // 같을때 하나만 증가시키면, 바로 다음 턴에 if로 들어가서 반대편도 
        // 똑같이 increment된다
        merged.push(arr2[j++])
      }
    }
    while (i < arr1.length) {
      merged.push(arr1[i++])
    }
    while (j < arr2.length) {
      merged.push(arr2[j++])
    }
    return merged
  }

  // 콜스택의 아름다움

  if (arr.length <= 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))
  return merge(left, right)
}

console.log('largeArray: ', largeArray);
const sortedArray = mergeSort(largeArray)
console.log('sortedArray: ', sortedArray);
