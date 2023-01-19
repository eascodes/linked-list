const LinkListFactory = () => {
    let head = null;
    let length = 0;

    const append = (value) => {
        let node = NodeFactory(value);

        if (head === null) {
            head = node;
        } else {
            let current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    const prepend = (value) => {
        let node = NodeFactory(value);

        if (head === null) {
            head = node;
        } else {
            let current = head;
            node.next = current;
            head = node;
        }
        length++;
    }

    const size = () => { return length };

    const headNode = () => {
        if (head === null) {
            console.log("There is no head.");
        } else {
            return head;
        }
    }

    const tail = () => {
        if (head === null) {
            console.log("There is no tail.")
        } else {
            let current = head;
            while (current.next != null) {
                current = current.next;
            }
            return current;
        }
    }

    const at = (index) => {
        if (head === null) {
            console.log("There is no linked list.");
        } else {
            let current = head;
            for (let i=0; i<index; i++) {
                if (current.next === null) {
                    return "An item at that index does not exist";
                } else {
                    current = current.next;
                }
            }
            return current;
        } 
    }

    const pop = () => {
        if (head === null) {
            console.log("There is no linked list.");
        } else {
            let current = head;
            while (current.next.next != null) {
                current = current.next;
            }
            current.next = null;
            length--;
        }
    }

    const contains = (value) => {
        if (head === null) {
            console.log("There is no linked list.");
        } else {
            let current = head;
            while (current.next != null) {
                if (current.value === value) {
                    return true;
                }
                current = current.next;
            }
            if (current.value != value) {
                return false;
            } else return true;
        }
    }

    const find = (value) => {
        if (head === null) {
            console.log("There is no linked list.");
        } else {
            let current = head;
            let index = 0;
            while (current.next != null) {
                if (current.value === value) {
                    return index;
                }
                index++;
                current = current.next;
            }
            if (current.value != value) {
                return "This value cannot be found.";
            } else return index;
        }
    }

    const toString = () => {
        if (head === null) {
            console.log("There is no linked list.");
        } else {
            let current = head;
            let str = "";
            while (current.next != null) {
                str = str + `( ${current.value} ) -> `;
                current = current.next;
            }
            str = str + `( ${current.value} ) -> null`;
            return str;
        }
    }

    return {append, prepend, size, headNode, tail, at, pop, contains, find, toString};
};

const NodeFactory = (value) => {
    if (value) {
        value = value;
    } else {
        value = null;
    }
    next = null;
    return {value, next};
};

const linkedList = LinkListFactory();