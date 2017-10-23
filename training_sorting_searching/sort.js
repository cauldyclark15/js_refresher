function ArrayList () {
  let array = []
  const swap = function (index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]]
  }
  const merge = function (left, right) {
    const result = []
    let il = 0
    let ir = 0
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }

    while (il < left.length) {
      result.push(left[il++])
    }

    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
  }
  const mergeSortRec = function (array) {
    const length = array.length
    if (length === 1) {
      return array
    }
    const mid = Math.floor(length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid, length)

    return merge(mergeSortRec(left), mergeSortRec(right))
  }
  const partition = function (array, left, right) {
    const pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right

    while (i <= j) {
      while (array[i] < pivot) {
        i++
      }
      while (array[j] > pivot) {
        j--
      }

      if (i <= j) {
        swap(i, j)
        i++
        j--
      }
    }
    return i
  }
  const quick = function (array, left, right) {
    let index

    if (array.length > 1) {
      index = partition(array, left, right)

      if (left < index - 1) {
        quick(array, left, index - 1)
      }

      if (index > right) {
        quick(array, right, index)
      }
    }
  }

  this.insert = function (item) {
    array.push(item)
  }

  this.toString = function () {
    return array.join()
  }

  this.bubbleSort = function () {
    const length = array.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1)
        }
      }
    }
  }

  this.selectionSort = function () {
    const length = array.length
    let indexMin = null

    for (let i = 0; i < length - 1; i++) {
      indexMin = i
      for (let j = 0; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin)
      }
    }
  }

  this.insertionSort = function () {
    const length = array.length
    let j = null
    let temp = null

    for (let i = 1; i < length; i++) {
      j = i
      temp = array[i]
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1]
        j--
      }
      array[j] = temp
    }
  }

  this.mergeSort = function () {
    array = mergeSortRec(array)
  }

  this.quickSort = function () {
    quick(array, 0, array.length)
  }
}

function createNonSortedArray (size) {
  const array = new ArrayList()
  for (let i = size; i > 0; i--) {
    array.insert(i)
  }
  return array
}

// const myArray = createNonSortedArray(15000)
// const start = new Date().getTime()
// myArray.bubbleSort()
// const end = new Date().getTime()
// console.log(end - start, 'ms - TIME ELAPSE')
// 1.776 seconds for our bubble sort
// comparing adjacent values

// const myArray = createNonSortedArray(15000)
// const start = new Date().getTime()
// myArray.selectionSort()
// const end = new Date().getTime()
// console.log(end - start, 'ms - TIME ELAPSE')
// 953 ms for our selection sort
// always picking the lowest value

// const myArray = createNonSortedArray(15000)
// const start = new Date().getTime()
// myArray.insertionSort()
// const end = new Date().getTime()
// console.log(end - start, 'ms - TIME ELAPSE')
// 722 ms for our insertion sort
// on single loop it will compare to one less the position of the current element

const myArrayMerge = createNonSortedArray(15000000)
const startM = new Date().getTime()
myArrayMerge.mergeSort()
const endM = new Date().getTime()
console.log(endM - startM, 'ms - TIME ELAPSE for merge sort')
// 8.174 s for our merge sort - 15M items
// divide and conquer

const myArrayQuick = createNonSortedArray(15000000)
const startQ = new Date().getTime()
myArrayQuick.quickSort()
const endQ = new Date().getTime()
console.log(endQ - startQ, 'ms - TIME ELAPSE for quick sort')
// 355 ms for our merge sort - 15M items
// index somewhere in the middle (or pivot) and conquer
