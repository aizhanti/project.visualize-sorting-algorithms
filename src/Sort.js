class Sort {
  constructor(array) {
    this.array = array;
  }

  sort() {
    let left = 0;
    let right = this.array.length - 1;
    this.quickSort(left, right);
    return this.array;
  }

  swap(left, right) {
    let temp = this.array[left];
    this.array[left] = this.array[right];
    this.array[right] = temp;
  }

  quickSort(left, right) {
    if (left < right) {
      let pivot = this.divide(left, right); //stores the position of pivot element
      this.quickSort(left, pivot - 1); //sorts the right side of pivot.
      this.quickSort(pivot + 1, right); //sorts the left side of pivot.
    }
  }

  divide(left, right) {
    let pivot = this.array[left]; // first element as a pivot
    let i = left + 1; // start from the next one
    for (let j = left + 1; j <= right; j++) {
      if (this.array[j] < pivot) {
        this.swap(i, j);
        i += 1;
      }
    }
    this.swap(left, i - 1); //put the pivot element in its proper place.
    return i - 1;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Sort;
