function Queue() {
  var items = [];

  this.enqueue = function(element) {
    items.push(element);
  };

  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
  };

}

// run examples

var queue = new Queue();
queue.enqueue('John');
queue.enqueue('Jack');
queue.print();
console.log(queue.isEmpty());
