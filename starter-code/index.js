class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.length++
    this.items.push(x)
    this.items.sort(function (a, b) { return a - b });
  }

  get(pos) { return this.items[pos - 1] }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }
  }
  average() {
    let average = this.items.reduce((a, b) => a + b, 0);
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return average / this.items.length;
    }
  }
  sum() {
    let sum = this.items.reduce((a, b) => a + b, 0);
    if (this.length === 0) {
      return 0;
    } else {
      return sum
    }
  }
};


// items: Array,
// length: items.length
new SortedList()
module.exports = SortedList;
