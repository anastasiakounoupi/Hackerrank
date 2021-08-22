function miniMaxSum(myArr) {
  const myArrDuplicate1 = myArr.slice()
  const myArrDuplicate2 = myArr.slice()

  const minSortedArr = myArrDuplicate1.sort(function (a, b) { return a - b })
  const maxSortedArr = myArrDuplicate2.sort(function (a, b) { return b - a })

  minSortedArr.pop()
  maxSortedArr.pop()

  const minSum = minSortedArr.reduce((a, b) => a + b, 0)
  const maxSum = maxSortedArr.reduce((a, b) => a + b, 0)

  console.log(`${minSum} ${maxSum}`)
}


