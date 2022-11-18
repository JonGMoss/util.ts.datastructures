import { Node } from "./Node";

interface ILinkedList<T> {
  add(data: T): void;
  remove(data: T): boolean;
  size(): number;
}

/**
 * Implementation of a LinkedList based off of Java methods.
 *
 * Adding length as an incremented value to save on calculating the length
 *
 * (List of methods - https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html)
 *
 * @export
 * @class LinkedList
 * @implements {ILinkedList<T>}
 * @template T
 */
export class LinkedList<T> implements ILinkedList<T> {
  head: Node<T> | null;
  length: number;
  constructor(head: Node<T> | null = null) {
    this.head = head;
    this.length = 0;
  }
  public size(): number {
    return this.length;
  }

  /**
   * Adds the specified element to the end of a list
   *
   * @param {T} element
   * @return {*}  {boolean}
   * @memberof LinkedList
   */
  public add(element: T): boolean {
    const node = new Node(element);

    if (!this.head) {
      this.head = node;
      this.length++;
      return true;
    }

    var currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return true;
  }

  public remove(element: T): boolean {
    var currentNode = this.head;

    if (this.head === null) return false;
    if (currentNode?.data === element) {
      this.head = currentNode.next;
      this.length--;
      return true;
    }
    var previousNode = this.head;

    while (currentNode?.data !== element) {
      if (!currentNode?.next) return false;

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.data === element) {
      previousNode.next = currentNode.next;
      this.head = previousNode;
      this.length--;
      return true;
    }

    return false;
  }
}
