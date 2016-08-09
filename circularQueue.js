var Queue = require('./queue');

function hotPotato(nameList, num) {
  var queue = new Queue();

  nameList.forEach(function(name) {
    queue.enqueue(name);
  });

  var eliminated = '';

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated!');
  }

  return queue.dequeue();
  
}

var names = ['Steve', 'Tanya', 'CJ', 'Keith', 'Kathrim', 'Charlie'];
var winner = hotPotato(names, 7);
console.log('The winner is ' + winner);
