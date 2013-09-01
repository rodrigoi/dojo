Array.prototype.bubbleSort = function () {
  var swap = false;
  do {
    swap = false;
    for(var i = 0; i < this.length; i++) {
      if(this[i] > this[i + 1]) {
        this[i] = this[i] + this[i+1];
        this[i+1] = this[i] - this[i+1];
        this[i] = this[i] - this[i+1];

        swap = true;
      }
    }
  } while (swap)
}

//we skip the last element because larger numbers
//are pushed back, there's no need to sort them
Array.prototype.forBubbleSort = function(){
  for(var j = 0; j < this.length; j++) {
    for(var i = 0, stop = this.length - j; i < stop; i++) {
      if(this[i] > this[i + 1]) {
        this[i] = this[i] + this[i+1];
        this[i+1] = this[i] - this[i+1];
        this[i] = this[i] - this[i+1];
      }
    }
  }
}

Array.prototype.quickSort = function () {
  if(this.length <= 1) {
    return this;
  }
  var pivotIndex = ~~(this.length / 2);
  var pivot = this[pivotIndex];

  var less = [];
  var greather = [];

  for (var i = 0; i < this.length; i++) {
    if(this[i] < pivot) {
      less.push(this[i]);
    }
    if(this[i] > pivot) {
      greather.push(this[i]);
    }
  }

  this.length = 0;
  this.push.apply(this, less.quickSort());
  this.push(pivot);
  this.push.apply(this, greather.quickSort());

  return this;
}

Array.prototype.functionalQuickSort = function () {
  if(this.length <= 1) {
    return this;
  }
  var pivotIndex = ~~(this.length / 2);
  var pivot = this[pivotIndex];

  var sorted = this.filter(function (item) { return item < pivot }).functionalQuickSort().concat([pivot]).concat(
               this.filter(function (item) { return item > pivot }).functionalQuickSort());

  this.length = 0;
  this.push.apply(this, sorted);
  return this;
}