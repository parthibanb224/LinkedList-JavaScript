class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    toArray() {
        let nodes = [];
        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    insertAtTail(data) {
        let newNode = new Node(data);

        // if list is empty
        if (this.head == null) {
            this.head = newNode;
        } else {
            // if list is non-empty
            // find the tail node
            let tail = this.head;

            while (tail.next != null) {
                tail = tail.next;
            }

            // tail.next = null
            tail.next = newNode;
        }
    }

    deleteAtTail() {
        if (this.head != null && this.head.next == null) {
            // list has only one node
            this.head = null;
        } else if(this.head != null) {
            let tail = this.head;

            while (tail.next.next != null) {
                tail = tail.next;
            }

            // tail.next.next = null
            tail.next = null;
        }
    }

    insertAtHead(data) {
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    deleteAtHead() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }

    // return the number of nodes in the linked list
    length() {
        // return this.toArray().length;
        // let nodes = [];
        // let thead = this.head;

        // while (thead != null) {
        //     nodes.push(thead.data);
        //     thead = thead.next;
        // }

        // return nodes.length;
        let nodes = 0;
        let thead = this.head;

        while (thead != null) {
            nodes++;
            thead = thead.next;
        }

        return nodes;
    }
}

let list = new LinkedList();

list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtTail(6);
list.insertAtTail(10);
list.insertAtTail(11);

list.deleteAtTail();
list.deleteAtTail();

list.insertAtHead(2);
list.insertAtHead(10);
list.deleteAtHead();

console.log(list.toArray());
console.log('length: ', list.length());

/*
    list = LinkedList {
        head: Node {
            data: 3,
            next: Node {
                data: 4,
                next: null
            }
        }
*/