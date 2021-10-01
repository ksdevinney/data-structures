class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  //size
  size() {
    return this.count;
  }

  //insert
  insertNode(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value is less than node.value, go left
      if (value < node.value) {
        // new node becomes left child if there is not one
        if (!node.left) {
          node.left = newNode;
        } else {
          // look left again, if a left child exists
          searchTree(node.left);
        }
        // greater than, go right
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  // delete
  remove(value) {
    const removeNode = function(node, value) {
        // if there is not a node
        if (node == null) {
            return null;
        }
        if (value == node.value) {
            // node has no children
            if (!node.left && !node.right) {
                return null;
            }
            // if node has no left child
            if (!node.left) {
                return node.right;
            }
            //if no right child
            if (!node.right) {
                return node.left;
            }
            // if left and right child
            let tempNode = node.right;
            while (tempNode.left) {
                tempNode = node.left;
            }
            node.value = tempNode.value;
            node.right = removeNode(node.right, tempNode.value);
            return node;
        } else if (value < node.value) {
            node.left = removeNode(node.left, value);
            return node;
        } else {
            node.right = removeNode(node.right, value);
            return node;
        }
    }
    this.root = removeNode(this.root, value);
  }

  //min
  min() {
    let currentNode = this.root;

    // go left while there are left children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  //max
  max() {
    let currentNode = this.root;

    // go right until there are no right children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  //contains
  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //depth first search
  // branch by branch

  // *  in-order
  // left, root, right
  depthInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);

      result.push(node.value);

      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  // * pre-order
  // root, left, right
  depthPreOrder() {
    let result = [];

    result.push(node.value);

    if (node.left) traverse(node.left);

    if (node.right) traverse(node.right);

    traverse(this.root);
    return result;
  }

  // * post-order
  // left, right, root
  depthPostOrder() {
    let result = [];

    if (node.left) traverse(node.left);

    if (node.right) traverse(node.right);

    result.push(node.value);

    traverse(this.root);
    return result;
  }

  // breadth first search
  // level by level
  breadthFirst() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
        let currentNode = queue.shift();

        result.push(currentNode);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) { 
            queue.push(currentNode.right);
        }
    }

    traverse(this.root);
    return result;
  }
}

const bst = new BinarySearchTree(15);

bst.insertNode(3);
bst.insertNode(36);
bst.insertNode(2);
bst.insertNode(12);
bst.insertNode(28);
bst.insertNode(39);

console.log(bst);