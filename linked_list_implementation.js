// Custom implemented SINGLY linked list in javascript

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        this.printList()
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        this.printList()
        return this
    }

    insert(index, value) {
        if (index >= this.length) {
            this.append(value)
            return
        }

        if (index == 0) {
            this.prepend(value)
            this.printList()
            return
        }

        const leader = this._traversToIndex(index - 1)
        const newNode = new Node(value)
        newNode.next = leader.next
        leader.next = newNode
        this.length++
        this.printList()
        return this
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log('\n', array)
    }

    remove(index) {
        if (index < 0 || index >= this.length || !index) {
            console.log(`index:${index} doesn't exists`);
            return undefined
        }

        if (index == 0) {
            this.head = this.head.next
            this.length--
            this.printList()
            return
        }

        let leader = this._traversToIndex(index - 1)
        leader.next = leader.next.next
        this.length--
        this.printList()
        return this
    }

    _traversToIndex(index) {
        let i = 0
        let currentNode = this.head
        while (i != index) {
            currentNode = currentNode.next
            i++
        }
        return currentNode
    }
}

const singlyLinkList = new LinkList(10)
singlyLinkList.append(5)
singlyLinkList.insert(55, 14)
singlyLinkList.append(16)
singlyLinkList.remove(4)
singlyLinkList.prepend(1)



// Custom implemented DOUBLY linked list in javascript

class NodeDoubly {
    constructor(value, previous) {
        this.value = value
        this.next = null
        this.previous = previous
    }
}

class DoublyLinkList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new NodeDoubly(value)
        newNode.previous = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        this.printList()
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        this.head.previous = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
        this.printList()
        return this
    }

    insert(index, value) {
        if (index >= this.length) {
            this.append(value)
            return
        }

        if (index == 0) {
            this.prepend(value)
            this.printList()
            return
        }
        const leader = this._traversToIndex(index - 1)
        const newNode = new NodeDoubly(value)
        newNode.next = leader.next
        newNode.previous = leader
        leader.next = newNode
        this.length++
        this.printList()
        return this
    }

    printList() {
        const array = []
        let currentNode = this.head
        while (currentNode) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log('\n', array)
    }

    remove(index) {
        if (index < 0 || index >= this.length || !index) {
            console.log(`index:${index} doesn't exists`);
            return undefined
        }

        if (index == 0) {
            this.head = this.head.next
            this.length--
            this.printList()
            return
        }

        let leader = this._traversToIndex(index - 1)
        leader.next = leader.next.next
        leader.next.previous = leader
        this.length--
        this.printList()
        return this
    }

    _traversToIndex(index) {
        let i = 0
        let currentNode = this.head
        while (i != index) {
            currentNode = currentNode.next
            i++
        }
        return currentNode
    }
}
console.log('\n', '\n', "________");
const doublyLinkList = new DoublyLinkList(10)
doublyLinkList.append(5)
doublyLinkList.append(44)
doublyLinkList.append(31)
doublyLinkList.insert(1, 55)
doublyLinkList.append(16)
doublyLinkList.remove(2)
doublyLinkList.prepend(1)