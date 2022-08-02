// Custom implemented stack(LIFO) in javascript using linked list
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)
        this.length++
        if (!this.top) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const savedTop = this.top
            this.top = newNode
            this.top.next = savedTop
        }
        return this
    }

    pop() {
        if (!this.length) {
            return
        }
        if (this.bottom == this.top) {
            this.bottom = null
        }
        this.top = this.top.next
        this.length--
        return this
    }

    print() {
        const arr = []
        let currentNode = this.top
        while (currentNode) {
            arr.push(currentNode)
            currentNode = currentNode.next
        }
        console.log(arr)
    }

    isEpty() {
        return this.length ? false : true
    }
}

const stack = new Stack()
stack.push(12)
stack.push(15)
stack.push(33)
stack.push(14235)
stack.pop()
stack.pop()
console.log(stack.isEpty());