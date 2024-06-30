function naiveStringSearch(short, long) {
  if (short === "" || long === "") return 0

  let count = 0
  outer: for (let i = 0; i < long.length - short.length + 1; i++) {
    if (short[0] === long[i]) {
      let j = 1
      while (j < short.length) {
        if (long[i + j] !== short[j]) {
          continue outer
        }
        j++
      }
      count++
    }
  }
  return count
}

console.log(naiveStringSearch("omg", "wowomgzomg"));
console.log(naiveStringSearch("lol", "lorie loled"));
console.log(naiveStringSearch("lo", "lorie loled"));
console.log(naiveStringSearch("omg", "wowomgzomgzomg"));
console.log(naiveStringSearch("omg", "wowomgzomgzomgomg"));
console.log(naiveStringSearch("omg", "wowomgzomgzomgomg"));
console.log(naiveStringSearch("abc", "abeadgfggabcedfs"));