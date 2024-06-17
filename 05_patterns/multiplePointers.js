// Pointers corresspoinding to an index or position that moves towards
// the beginning, end or middle
// Minimum space complexity

// 1. 포인터가 샌드위치로 좁혀오는 경우
// sorted array로 들어오기 때문에
// 투 포인터를 쓰면 빠르다는 것을 알 수 있음
// 가장 처음으로 발생하는 pair만 찾아서 return함
function sumZero(sortedArray) {
  if (!sortedArray) {
    return undefined
  }

  let end = sortedArray.length - 1

  for (let start = 0; start < sortedArray.length; start++) {
    if (start >= end) {
      break
    }

    if (sortedArray[start] + sortedArray[end] > 0) {
      end -= 1
    } else if (sortedArray[start] + sortedArray[end] === 0) {
      return [sortedArray[start], sortedArray[end]]
    } else {
      continue
    }
  }
  // while문과 for문은 서로 구현할 수 있다

  // let start = 0
  // let end = sortedArray.length - 1
  // while (start < end) {
  //   let sum = sortedArray[start] + sortedArray[end]
  //   if (sum > 0) {
  //     end--
  //   } else if (sum === 0) {
  //     return [sortedArray[start], sortedArray[end]]
  //   } else {
  //     start++
  //   }
  // }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

console.log("-------------")
// 2. 포인터가 같은 방향에서 출발하는 경우
// sortedArray

function countUniqueValues(sortedArray) {
  // EDGE CASE 중요함!
  if (sortedArray.length === 0) {
    return 0
  }
  // 내 풀이

  // let uniqueCount = 1
  // let chunkStart = 0

  // for (let chunkLast = 0; chunkLast < sortedArray.length; chunkLast++) {
  //   if (chunkLast < chunkStart) {
  //     continue
  //   }

  //   if (sortedArray[chunkLast] > sortedArray[chunkStart]) {
  //     uniqueCount++
  //     chunkStart = chunkLast
  //     continue
  //   }
  // }
  // return uniqueCount

  // 주어진 array를 바꿨을 때
  let foundIdx = 0
  for (let newValueIdx = 1; newValueIdx < sortedArray.length; newValueIdx++) {
    if (sortedArray[newValueIdx] > sortedArray[foundIdx]) {
      foundIdx++
      sortedArray[foundIdx] = sortedArray[newValueIdx]
      // 이게 없으면 변화하는 foundIdx를 감지할 수 없다
      continue
    }
  }

  return foundIdx + 1
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4