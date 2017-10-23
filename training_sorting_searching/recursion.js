// recursive function template

// function callMyself (x) {
//   console.log('value of x: ', x)
//   if (x < 1) {
//     return console.log('we are done')
//   }
//   return callMyself(x - 1)
// }

// callMyself(15)

function factorial (n) {
  if (n === 1) {
    return n
  }

  return n * factorial(n - 1)
}

console.log(factorial(5))
