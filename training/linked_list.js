function LinkedList () {
  let Node = function (element) { // Node class represents the item that we want to add
    this.element = element
    this.next = null
  }

  let length = 0
  let head = null

  this.append = function (element) {
    let node = new Node(element)
    let current

    if (head === null) {
      head = node
    } else {
      current = head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    length++
  }

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head
      let previous
      let index = 0

      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = current.next
      }

      length--

      return current.element
    }
  }

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous = null
      let index = 0

      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      length++
      return true
    } else {
      return false
    }
  }

  this.toString = function () {
    let current = head
    let string = ''

    while (current) {
      string += `${current.element}${current.next ? ',' : ''}`
      current = current.next
    }

    return string
  }
}

const myLinkedList = new LinkedList()

myLinkedList.append('react')
myLinkedList.append('node')
myLinkedList.append('react native')

console.log(myLinkedList.toString())
