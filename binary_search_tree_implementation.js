// Custom implemented binary search tree in javascript

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
}
const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(3)
tree.insert(5)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(20)
tree.lookup(21)
console.log(JSON.stringify(tree));