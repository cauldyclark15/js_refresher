/**
 * Queue follows FIFO (First In First Out)
 * methods available for our queue
  1. enqueue(element(s))
  2. dequeue()
  3. front()
  4. isEmpty()
  5. size()
 */

function Queue () {
  let store = []

  this.enqueue = function (elements) {
    store.push(elements)
    return elements
  }

  this.dequeue = function () {
    return store.shift()
  }

  this.front = function () {
    return store[0]
  }

  this.isEmpty = function () {
    return store.length === 0
  }

  this.size = function () {
    return store.length
  }

  this.print = function () {
    return console.log(store.toString())
  }
}

function hotPotato (nameList, num) {
  let queue = new Queue()

  nameList.forEach(name => {
    queue.enqueue(name)
  })

  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(`${eliminated} was eliminated from the hot potato game.`)
  }

  return `Our winner is ${queue.dequeue()}`
}

let names = ['Jc', 'Kim', 'Xander', 'Zyreb', 'Ysabel']
console.log(hotPotato(names, 15))
