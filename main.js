const LinkListFactory = () => {
    let head = null;
    let length = 0;

    const handleError = () => { 
        return "A linked list does not exist yet."; 
    }

    // Add node to the end of list
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

    // Add node to the beginning of list
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

    // Return size of list
    const size = () => { return length };

    // Return first node in list
    const headNode = () => {
        if (head === null) {
            return handleError();
        } else {
            return head;
        }
    }

    // Return last node in list
    const tail = () => {
        if (head === null) {
            return handleError();
        } else {
            let current = head;
            while (current.next != null) {
                current = current.next;
            }
            return current;
        }
    }

    // Return node at given index
    const at = (index) => {
        if (head === null) {
            return handleError();
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

    // Remove last node from list
    const pop = () => {
        if (head === null) {
            return handleError();
        } else if (length === 1) {
            head = null;
            length = 0;
        } else {
            let current = head;
            while (current.next.next != null) {
                current = current.next;
            }
            current.next = null;
            length--;
        }
    }

    // Return true if passed value is in the list, otherwise return false
    const contains = (value) => {
        if (head === null) {
            return handleError();
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

    // Return index of node containing the passed value
    const find = (value) => {
        if (head === null) {
            return handleError();
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

    // Return string representation of list
    const toString = () => {
        if (head === null) {
            return handleError();
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