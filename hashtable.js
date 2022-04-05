class HashTable {
    constructor() {
        this.table = new Array(128);
        this.size = 0;
    }

    // create the hash value
    // accepts a key and transforms it into an index
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.CharCodeAt(i);
        }
        return hash % this.table.length;
    }

    // set a key/value pair in the table
    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    // get a value from the table
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }

    // remove a key/value pair from the table
    remove(key) {
        const index = this._hash(key);

        if (this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}