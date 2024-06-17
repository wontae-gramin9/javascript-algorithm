// Use object or set to collect values/frequencies of values O(n)
// This can often avoid the need for nested loops O(n^2) at array/string

function same(array1, array2) {
  if (array1.length !== array2.length)
    return false
  let counter = {}

  for (let elm of array1) {
    counter[elm ** 2] = ++counter[elm ** 2] || 1 // 이미 counter[elm ** 2]에서 0으로 할당됨
  }

  for (let squared of array2) {
    counter[squared] -= 1
  }

  return Object.values(counter).reduce((acc, elm) => {
    return acc + elm
  }, 0) === 0

  // array1의 한 elm이 모든 array2의 squared를 날릴 수 있을 때
  // const set = new Set()
  // for (let elm of array1) {
  //   set.add(elm ** 2)
  // }

  // for (let squared of array2) {
  //   set.delete(squared)
  // }

  // console.log(set)
  // return set.size === 0
}
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same freq)

console.log("-------------")

// Anagram
// all lowercase, string, spaces
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  let counter = {}
  for (let elm of str1) {
    counter[elm] = ++counter[elm] || 1
  }

  // 반복문을 3번 도는것보다 2번 도는 방법은 항상 있을 것
  for (let elm of str2) {
    if (!counter[elm]) {
      return false
    } else {
      counter[elm] -= 1
    }
  }

  return true
}

console.log(anagram("", "")); // true
console.log(anagram("aaz", "zza")); // false
console.log(anagram("anagram", "nagaram")); // true
console.log(anagram("rat", "car")); // false
console.log(anagram("awesome", "awesom")); // false
console.log(anagram("qwerty", "qeywrt")); // true
console.log(anagram("texttwisttime", "timetwisttext")); // true