// Outer function & inside the recursion function
function outer(input) {
  // 만약 outer가 recursive하게 불려진다면
  // 매번 불릴때마다 outerScopedVariableToBeUpdated []로 초기화된다.
  // 그러니 재귀를 써서 outerScopedVariableToBeUpdated에 값을 저장하고 싶다면
  // 재귀를 내부에서 부르자
  var outerScopedVariableToBeUpdated = []

  function helper(helperInput) {
    helper(helperInput--)
  }
  helper(input)

  return outerScopedVariableToBeUpdated
}

function collectOddValues(arr) {
  let result = []

  function helper(arr) {
    if (arr.length === 0) return
    if (arr[0] % 2 === 1) {
      result.push(arr[0])
    }
    helper(arr.slice(1))
  }
  helper(arr)

  return result
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]))

// helper를 쓰지 않고 어떻게 구현할 수 있을까?
// pure recursion
function pureRecursion(arr) {
  // 매번 함수가 실행될때마다 초기화되는건 맞음
  // 근데 closure로 outerScopedVariable이 초기화되는게 아니라
  // 매번 재귀위 함수가 초기화 되는 것임 
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }

  // 대신 최종 리턴 전에 기존의 newArr를 재귀의 리턴값과 함께 concatonate한다
  newArr = newArr.concat(pureRecursion(arr.slice(1)))
  return newArr
}
console.log(pureRecursion([1, 2, 3, 4, 5, 6, 7]))
// pureRecursion([1, 2, 3, 4, 5, 6, 7])
// [1].concat([].concat(pureRecursion([3, 4, 5, 6, 7])))
// [1].concat([].concat([3].concat(pureRecursion([4, 5, 6, 7]))))

// For pure recursion, use array methods like slice, ... and concat
// that makes copies of arrays so you do not mutate the original array