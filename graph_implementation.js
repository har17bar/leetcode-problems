// Custom implemented graph in javascript

class Graph {
    constructor() {
        this.numberOfNodes = 0
        this.adjacentList = {}
    }

    addVertex(node) {
        if (!this.adjacentList[node]) {
            this.adjacentList[node] = []
            this.numberOfNodes++
        }
        return this
    }

    addEdge(node1, node2) {
        // undirected Graph
        const foundedNode1 = this.adjacentList[node1]
        const foundedNode2 = this.adjacentList[node2]
        if (this.adjacentList[node1] && this.adjacentList[node2]) {
            for (let i = 0; i < this.adjacentList[node1].length; i++) {
                if (this.adjacentList[node1][i] == node2) {
                    return
                }
            }
            foundedNode1.push(node2)
            foundedNode2.push(node1)
        }
        return this
    }

    showConnections() {
        let str = ""
        for (const key in this.adjacentList) {
            str = str + key + "--> "
            for (let j = 0; j < this.adjacentList[key].length; j++) {
                str += this.adjacentList[key][j] + " "
            }
            str += "\n"
        }
        console.log(str);
    }
}

const myGraph = new Graph()
myGraph.addVertex("0")
myGraph.addVertex("1")
myGraph.addVertex("2")
myGraph.addVertex("3")
myGraph.addVertex("4")
myGraph.addVertex("5")
myGraph.addVertex("6")
myGraph.addEdge("3", "1")
myGraph.addEdge("3", "4")
myGraph.addEdge("4", "2")
myGraph.addEdge("4", "5")
myGraph.addEdge("1", "2")
myGraph.addEdge("1", "0")
myGraph.addEdge("0", "2")
myGraph.addEdge("6", "5")
myGraph.addEdge("6", "5")
myGraph.addEdge("6", "5")

myGraph.showConnections()