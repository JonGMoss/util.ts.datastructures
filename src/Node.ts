export class Node<T> {
  public data: T;
  public next: Node<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}
