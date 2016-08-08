function Stack() {
  var items = [];

  this.add = function(val) {
    for (var x = items.length; x > 0; x--) {
      items[x] = items[x-1];
    }
    items[0] = val;
    console.log(items);
  };

  this.remove = function() {
    if (items.length === 0) {
      console.log('you cannot use remove on empty stack');
    } else {
      var value = items[0];
      console.log('removing ' + value);
      for (var x = 1; x < items.length; x++) {
        items[x-1] = items[x];
      }
      items.length = items.length - 1;
      console.log(items);
    }
  };

  this.peek = function() {
    console.log(items[0]);
  };

  this.isEmpty = function() {
    console.log(items.length === 0);
  };

  this.clear = function() {
    items = [];
  };

  this.print = function() {
    console.log(items);
  };
 }

var example = new Stack();
example.add(1);
example.add(2);
example.add(3);
example.add(4);
example.add(5);
example.remove();
example.remove();
example.add(7);
example.peek();
example.isEmpty();
example.remove();
example.remove();
example.remove();
example.remove();
example.isEmpty();
