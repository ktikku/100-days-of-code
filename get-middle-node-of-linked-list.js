/* Should return data of middle node. If linked list is empty, then  -1*/
getMiddle(node)
{
  //your code here
  let slow = node;
  let fast = node;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}