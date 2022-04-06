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

    if (this.table[index]) {
      for (let i = 0; i < this.table[index]; i++) {
        // find key/value pair
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      // index not found, push key/value pair
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
    }
    this.table[index] = [key, value];

    this.size++;
  }

  // get a value from the table
  get(key) {
    const target = this._hash(key);
    if (this.table[target]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        }
      }
    }
    return undefined;
  }

  // remove a key/value pair from the table
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table[index]; i++) {
        if (this.table[index] === key) {
          this.table.index.splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }
}
