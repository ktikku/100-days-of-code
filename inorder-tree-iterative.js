class Solution {
    //Return a list containing the inorder traversal of the given tree
  inOrder(root){
      //code here
      const callStack = [];
      const result = [];
      let current = root;
      
      while(true) {
          // traverse through left sub-tree
          while(!!current) {
              callStack.push(current);
              current = current.left;
          }
          if (callStack.length === 0) break;
          let lastCurrent = callStack.pop();
          result.push(lastCurrent.key);
          current = lastCurrent.right;
      }
      return result;
  }
}