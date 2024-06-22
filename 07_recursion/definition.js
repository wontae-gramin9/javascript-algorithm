// Take 1 problem and do it over again on a smaller piece
// or on a changing piece until hitting the base case, the end point

// def: A function that calls itself until end point
// ex) JSON.parse / stringfy, object traversal, document.getElementById, Dom traversal

// 함수는 콜 스택에 올라가는데,
// 1. base case(Conditional, return: a good ending point) 
// return으로 꼭 끝내줘야 한다.
// 2. different input each time, otherwise it can never reach the base case
// 매번 input이 같으면 절대로 base case로 향할 수 없다

// 1,2번이 충족되지 않거나 틀리면 call stack overflow가 일어나서 프로그램이 종료된다.

function countDown(num) {
  if (num <= 0) { // Base case, almost always in a conditional that returns sth
    console.log("All done!, base case")
    return // ending point
  }
  console.log(num)
  num -= 1 // Different input each time
  countDown(num)
}
countDown(5)

function sumRange(num) {
  if (num === 1) return 1 // Base case (Conditional, return)
  return num + sumRange(num - 1) // Different input each time
  // return이 있네
  // 3 + 2 + 1 = 6이 된다는 것인데, 항상 이 중간값을 담을 수 있는 변수가 없는데
  // 어떻게 중간값들을 기억하는거지? 가 의문이었다
  // 3. return 값에 바로 recusive가 걸려있고, recursive가 또 다른 값을 return할 때만
  // 변수가 없어도 계속 return에서 마지막 recursive의 return값까지 기다리게 되는 것
}
console.log(sumRange(4))

function iterativeFactorial(num) {
  let total = 1
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total
}
console.log(iterativeFactorial(4))

function recursiveFactorial(num) {
  if (num === 1) return 1 // Base case: 조건문, return
  return num * recursiveFactorial(num - 1) // Different input, waiting return consecutive
}
console.log(recursiveFactorial(4))
