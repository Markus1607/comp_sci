// Easy stacks that assume the base is the first element in array
// Uses other array methods
// Difficulty: 1/5

function Stack() {
  var array = [];

  this.push = function(item) {
    array.push(item);
  };

  this.pop = function() {
    return array.pop();
  };

  this.peek = function() {
    return array[array.length-1];
  };

  this.isEmpty = function() {
    return array.length === 0;
  };

  this.size = function() {
    return array.length;
  };

  this.clear = function() {
    array = [];
  };

  this.print = function() {
    console.log(array.toString());
  };
}
