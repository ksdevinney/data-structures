// FIFO
class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    //enqueue (put in line)
    enqueue(item) {
        this.storage[this.tail] = item;
        this.tail++;
    }

    //shift (dequeue)
    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        console.log(removed);
    }

    //peek
    peek() {
        console.log(this.head);
    }
}

const test = new Queue();

test.enqueue("apple");
test.enqueue("orange");
test.enqueue("kiwi");
test.enqueue("strawbrerry");

test.dequeue();

console.log(test);