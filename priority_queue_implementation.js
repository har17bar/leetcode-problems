// Custom implementation of priority queue in javascript using linked list

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    isEmpty(){
        return this.size() === 0
    }

    size(){
        return this._heap.length
    }

    peek(){
        return this._heap[0]
    }

    _parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    _leftChild(idx) {
        return idx * 2 + 1;
    }

    _rightChild(idx) {
        return idx * 2 + 2;
    }

    _swap(i, j){
        const tmp = this._heap[i]
        this._heap[i] = this._heap[j]
        this._heap[j] = tmp
    }

    _compare(i,j){
        return this._comparator(this._heap[i],this._heap[j])
    }

    push(v){
        if(this.isEmpty()){
            this._heap.push(v)
            return
        }

        let current = this._heap.push(v) -1
        while (true){
            let current_index = current
            let parent = this._parent(current_index)
            if(!this._compare(current_index, parent) || current_index < 0) {
                break
            }
            this._swap(current_index, parent)
            current = parent
        }
    }

    pop(){
        if(this.size() > 1 ){
            this._swap(0, this.size()-1)
        }

        let bigNum = this._heap.pop()

        let nodeIdx = 0
        while (
            (this._leftChild(nodeIdx) < this.size() &&
                this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
            (this._rightChild(nodeIdx) < this.size() &&
                this._compare(this._rightChild(nodeIdx), nodeIdx))
            ) {
            const greaterChildIdx =
                this._rightChild(nodeIdx) < this.size() &&
                this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
                    ? this._rightChild(nodeIdx)
                    : this._leftChild(nodeIdx);

            this._swap(greaterChildIdx, nodeIdx);
            nodeIdx = greaterChildIdx;
        }

        return bigNum
    }

    _remove(i){
        this._heap.splice(i,1)
    }
}

const pq = new PriorityQueue();
pq.push(12);
pq.push(15);

pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);
pq.push(52)
pq.push(25)
pq.push(70)
pq.push(10)
pq.push(11)
pq.push(76)
pq.push(25)

while(!pq.isEmpty()) {
    console.log(pq.pop());
}
