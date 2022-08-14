// Custom implementation binary search tree in javascript

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value)
        } else {
            let currentNode = this.root
            const newNode = new Node(value)
            while (true) {
                if (value >= currentNode.value) {
                    const rightNode = currentNode.right
                    if (!rightNode) {
                        currentNode.right = newNode
                        return
                    }
                    currentNode = rightNode
                } else {
                    const leftNode = currentNode.left
                    if (!leftNode) {
                        currentNode.left = newNode
                        return
                    }
                    currentNode = currentNode.left
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root
        if (!currentNode) {
            return undefined
        }
        while (currentNode) {
            if (value == currentNode.value) {
                return currentNode
            }
            if (value > currentNode.value) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        return undefined
    }

    _traverseAndSetRec(node, value) {
        if (value >= node.value) {
            if (!node.right) {
                node.right = new Node(value)
                return
            }
            this._traverseAndSet(node.right, value)
        } else {
            if (!node.left) {
                node.left = new Node(value)
                return
            }
            this._traverseAndSet(node.left, value)
        }
    }
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {

            // console.log(queue, "_");
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    breadthFirstSearchRec(queue, list) {
        if (!queue || !queue.length) {
            return list;
        }
        const currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        return this.breadthFirstSearchRec(queue, list);
    }

    DFSinOrder() {
        return this._traverInOrder(this.root, [])
    }

    DFSpreOrder() {
        return this._traverPreOrder(this.root, [])
    }

    DFSpostOrder() {
        return this._traverPostOrder(this.root, [])
    }

    _traverInOrder(node, list) {
        if (node.left) {
            this._traverInOrder(node.left, list)
        }
        list.push(node.value)
        if (node.right) {
            this._traverInOrder(node.right, list)
        }

        return list
    }

    _traverPreOrder(node, list) {
        list.push(node.value)
        if (node.left) {
            this._traverPreOrder(node.left, list)
        }

        if (node.right) {
            this._traverPreOrder(node.right, list)
        }

        return list
    }

    _traverPostOrder(node, list) {
        if (node.left) {
            this._traverPreOrder(node.left, list)
        }

        if (node.right) {
            this._traverPreOrder(node.right, list)
        }

        list.push(node.value)
        return list
    }
}
[1, 4]

// _traverInOrder([6], [1, 4])
// _traverInOrder([4], [])
// _traverInOrder([9], [])
// inorder [1,4,6,9,15,20,170]
//     9
//  4     20
//1  6  15  170

// [9]
// [4, 20]
// [20, 1, 6]
// [1, 6, 15, 170]
const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.breadthFirstSearchRec([tree.root], [])

console.log('BFS', tree.breadthFirstSearch());
console.log('BFS-REC', tree.breadthFirstSearchRec());

console.log('DFS-In', tree.DFSinOrder());
console.log('DFS-Pre', tree.DFSpreOrder());
