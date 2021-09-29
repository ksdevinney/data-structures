class Node {
    constructor(data, next = null ) {
        this.data = data;
        this.next = next;
    }
};

// const n1 = new Node(100);
// console.log(n1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // methods:
    // insert head
    insertHead(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // insert tail (?)
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty, will be head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // insert at index
    insertHere(data, index) {
        // if requested index doesn't exist
        if (index > 0 && index > this.size) {
            return;
        }
        // if first index
        if (index === 0) {
            this.head = new Node(data, this.head); 
            return;
        } 
        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            // node before index
            previous = current;
            count++;
            // node after
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // get a specific index
    getIndex(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // remove specific index 
    removeIndex(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // remove head
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next; 
            }

            previous.next = current.next;
        }
        this.size--;

    }

    // clear list
    clearList() {
        this.head = null;
        this.size = 0; 
    }

    // print list
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertHead(6);
ll.insertHead(8);
ll.insertHead(128);
ll.insertLast(99);

ll.clearList();

// ll.removeIndex(0);
// ll.insertHere(60, 900);
//ll.getIndex(100);

ll.printListData();