
function addTogether () {
  const len = arguments.length
  if (len === 0) {
    return undefined
  }
  if (len === 1) {
    const firstNum = arguments[0]
    if (typeof firstNum !== 'number') {
      return undefined
    }
    return function addTo (secondNum) {
      if (typeof secondNum !== 'number') {
        return undefined
      }
      return firstNum + secondNum
    }
  }
  if (len === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    return arguments[0] + arguments[1]
  }
  return undefined
}

console.log(addTogether())
