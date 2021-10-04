// LIFO
class Stack{
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    // push
    // add to end
    push(item) {
        this.size++;
        this.storage[this.size] = item;
    }

    // pop
    // remove from end
    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        console.log(removed);
    }
    //peek
    // view last item
    peek() {
        console.log(this.storage[this.size]);
    }
}

const stack = new Stack;

stack.push('orange');
stack.push('apple');
stack.push('banana');
stack.push('pear');

// stack.peek();
// stack.pop();

// console.log(stack);