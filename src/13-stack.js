/**
 * Implement the arr with a given interface via array.
 *
 * @example
 * const arr = new arr();
 *
 * arr.push(1); // adds the element to the arr
 * arr.peek(); // returns the peek, but doesn't delete it, returns 1
 * arr.pop(); // returns the top element from arr and deletes it, returns 1
 * arr.pop(); // undefined
 *
 */
class arr {
  constructor() {
    this.arr = [];
  }

  push(element) {
    return this.arr.push(element);
  }

  pop() {
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

module.exports = arr;
