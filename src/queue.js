const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.headElement = null;
  }

  getUnderlyingList() {
    return this.headElement;
  }

  enqueue(value) {
    if (!this.headElement) {
      this.headElement = new ListNode(value);
      this.tailElement = new ListNode(value);
    } else {
      let curElement  = this.headElement;
      while (curElement.next) {
        curElement = curElement.next;
      }
      curElement.next = new ListNode(value);
    }
  }

  dequeue() {
    let removedElement = this.headElement.value;
    this.headElement = this.headElement.next;
    return removedElement;
  }
}

module.exports = {
  Queue
};
