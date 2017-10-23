/*
  Stack follows LIFO (Last In First Out)
  methods available for our Stack
  1. push(element(s))
  2. pop()
  3. peek()
  4. isEmpty()
  5. clear()
  6. size()
*/

function Stack () {
  let store = []

  this.push = function (element) {
    store.push(element)
    const size = store.length
    return store[size - 1]
  }

  this.pop = function () {
    return store.pop()
  }

  this.peek = function () {
    const size = store.length
    return store[size - 1]
  }

  this.isEmpty = function () {
    const size = store.length
    return size === 0
  }

  this.clear = function () {
    store = []
  }

  this.size = function () {
    const size = store.length
    return size
  }
}

function convertToBinary (decNumber) {
  const remStack = new Stack()
  let remainder = null
  let binaryString = ''

  while (decNumber > 0) {
    remainder = decNumber % 2
    remStack.push(remainder)
    decNumber = Math.floor(decNumber / 2)
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}

console.log(convertToBinary(8))
