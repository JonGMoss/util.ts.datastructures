import { LinkedList } from "../src";

describe("./LinkedList", () => {
  test("Calling constructor creates an empty LinkedList object", () => {
    const linkedList = new LinkedList.LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.length).toEqual(0);
  });

  test("the add method will add an element to the end of the list", () => {
    const linkedList = new LinkedList.LinkedList();

    linkedList.add(5);
    linkedList.add(10);

    expect(linkedList.head?.data).toEqual(5);
    expect(linkedList.head?.next?.data).toEqual(10);
    expect(linkedList.length).toEqual(2);
  });

  test("Size method returns the size of the list", () => {
    const linkedList = new LinkedList.LinkedList();

    linkedList.add(5);
    linkedList.add(10);

    expect(linkedList.size()).toEqual(2);
  });

  test("Remove method removes the first occurrence of an element reduces length by 1", () => {
    const linkedList = new LinkedList.LinkedList();

    linkedList.add(1);
    linkedList.add(5);
    linkedList.add(10);

    expect(linkedList.remove(1)).toEqual(true);
    expect(linkedList.length).toEqual(2);
  });
});
