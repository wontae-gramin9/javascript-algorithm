// array, number
// looking for/keeping track of a continuous subset of the data(subarray, string, number)
// the sliding window can increase or close(and a new window is created)
// left - right
// O(n)으로 줄일 수 있다.

// findLongestSubstring
function uniqueCharacter(str) {
  if (str === "")
    return ""

  let window = ""
  let storage = {}

  for (let i = 0; i < str.length; i++) {
    const elm = str[i]
    if (storage[elm]) {
      // if (maxWindow.length < window.length) {
      //   maxWindow = window
      // }
      break
    } else {
      storage[elm] = 1
      window += elm
    }
  }
  console.log('window: ', window);
  let maxWindow = window
  for (let j = 1; j < str.length; j++) {
  }
}

console.log(uniqueCharacter("hellothere")) // "lother"

// maxSubarraySum
// 딱히 sorted array라는 조건은 없다 
function maxSubarraySum(array, num) {
  if (array.length < num) {
    return null
  }

  // 1. recalculate하면 n^2가 된다
  // let chunk
  // let max = -Infinity
  // for (let i = 0; i < array.length; i++) {
  //   chunk = array.slice(i, i + num).reduce((acc, elm) => acc + elm, 0)
  //   if (chunk > max) {
  //     max = chunk
  //   }
  // }

  // 2. window의 크기가 변하지 않으니, window의 내부 합을 기억한 뒤
  // 앞을 빼고 뒤를 넣어주면 된다.
  // 이게 처음으로 올라오는 것
  let chunk = array.slice(0, num).reduce((acc, elm) => acc + elm, 0)
  let max = chunk
  // 처음 청크가 다 만들어졌으니 그 이후부터는 num 인덱스에서 시작한다
  for (let i = num; i < array.length; i++) {
    chunk = chunk - array[i - num] + array[i]
    max = Math.max(max, chunk)
  }
  return max
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null EDGE Case