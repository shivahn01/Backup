function staircase(n){
	var line = Array(n+1).fill(' ');
	for(var i=n-1; i>=0; i--){
		line[i] = '#'
		console.log(line.join(''))
	}
}



function draw(n) {
	var array = [];
	for(var i = 0; i <n; i++){
		
		if(i==0 || i == n-1 ) { 
			array[i] = new Array(n).fill('*');
		}else{
			array[i] = new Array(n).fill(' ');
		}
			
		
		for(var j =0; j < n; j++){
			if(i==j) {
				array[i][j] = '*'
				
			}
		}
		array[i].reverse();
	}
	
	return array;
}

function print(n) {
	var line = draw(n);
	for(var i =0; i <n; i++){
		console.log(line[i].join(''));
	}
	
}

print(5);

var stack1 = [];
var stack2 = [];

function enqueue(n) {
	stack1.push(n)
}

function dequeue(){
	if(stack1.length < 0) {
		return 'cannot dequeue the stack1 is empty'
	}
	while (stack1.length > 0) {
		stack2.push(stack1.pop());
	}
	return stack2.pop();
}

enqueue('a')
enqueue('b')
enqueue('c')
enqueue('d')
enqueue('e')
enqueue('f')
enqueue('g')
dequeue()
	

function fib(n){
	
	if(n ==0){
		return 0;
	}
	if(n == 1) {
		return 1;
	}
	if(n > 1) {
		return fib(n-1) + fib(n-2)
	}
}

fib(5);



function RangeOverlap(p1,len1,p2,len2){
	var higestStartPoint = Math.max(p1,p2);
	var lowestEndPoint = Math.min(p1+len1,p2+len2);
	if(higestStartPoint >= lowestEndPoint) {
		return {startPoint: null, overlapLength: null}
	}
	var overlapLength = lowestEndPoint - higestStartPoint;
	return {
		startPoint: higestStartPoint,
		overlapLength: overlapLength
	}
}

function findRectangularOverlap(rect1,rect2){
	var xOverlap = RangeOverlap(rect1.leftx,rect1.width,rect2.leftx,rect2.width);
	var yOverlap = RangeOverlap(rect1.bottomx,rect1.height,rect2.bottomy,rect2.height);
	
}


var coins = [1,4,7,6]
function getCombinations(amount,list1,start){
	for(var i =0; i<coins.length; i++){
		var remain = amount - coins[i];
		var list2 = list1.slice(0);
		list2.push(coins[i]);
	}
	if(remain < 0){
		return;
	}
	if(remain == 0){
		document.body.innerHtml += list2 + "<br>"
		return;
	} else {
		getCombinations(remain,list2,i)
	}
	
}

getCombinations(10,[],0)


function getClosingParen(sentence,positionOpenParIndex){
	 var openParCnt = 0;
	for( var i = positionOpenParIndex+1; i<sentence.length;i++ ) {
		console.log(i+'   '+sentence[i])
		if(sentence[i] == '('){
			openParCnt++;
		}else if(sentence[i] == ')') {
			
				if(openParCnt == 0){
					return i;
				}
				else {
				openParCnt = openParCnt -1;
				}
		}
	}
	
	throw new Error('No closing parenthesis :(');
}

getClosingParen('like this (and this))',0)




function isValid(sentence){
	var openersToClosers = {
      '(': ')',
      '[': ']',
      '{': '}',
	};
	var openers = new Set(['[','(','{']);
	var closers = new Set([']',')','}']);
	var openersStack = [];
	for(var i= 0; i<sentence.length; i++){
		var char1 = sentence[i];
		if(openers.has(char1)) {
			openersStack.push(char1);
		} else if(closers.has(char1)) {
			if(!openersStack.length){
				return false;
			} else {
				var lastUnclosedOpener = openersStack.pop();
				if(openersToClosers[lastUnclosedOpener] != char1){
					return false;
				}
			}
		}
	}
	
	return openersStack.length == 0;
}

isvalid('[]')



var cakeTypes = [
  { weight: 7, value: 10 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

var capacity = 2;

maxDuffelBagValue(cakeTypes, capacity);

function maxDuffelBagValue(cakeTypes, weightCapacity) {

  // we make an array to hold the maximum possible value at every
  // duffel bag weight capacity from 0 to weightCapacity
  // starting each index with value 0
  var maxValuesAtCapacities = [];
  for (var i = 0; i <= weightCapacity; i++) {
      maxValuesAtCapacities[i] = 0;
  }

  for (var currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

      // set a variable to hold the max monetary value so far for currentCapacity
      var currentMaxValue = 0;

      // we use a for loop here instead of forEach because we return infinity
      // if we get a cakeType that weighs nothing and has a value. but forEach
      // loops always return undefined and you can't break out of them without
      // throwing an exception
      for (var j = 0; j < cakeTypes.length; j++) {
          var cakeType = cakeTypes[j];

          // if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
          if (cakeType.weight === 0 && cakeType.value !== 0) {
              return Infinity;
          }

          // if the current cake weighs as much or less than the current weight capacity
          // it's possible taking the cake would give get a better value
          if (cakeType.weight <= currentCapacity) {

              // so we check: should we use the cake or not?
              // if we use the cake, the most kilograms we can include in addition to the cake
              // we're adding is the current capacity minus the cake's weight. we find the max
              // value at that integer capacity in our array maxValuesAtCapacities
              var maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];

              // now we see if it's worth taking the cake. how does the
              // value with the cake compare to the currentMaxValue?
              currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
          }
      }

      // add each capacity's max value to our array so we can use them
      // when calculating all the remaining capacities
      maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[weightCapacity];
}


var str = "After beating the eggs, Dana read the next step:";
var array = str.split('');
array.reduce((acc,value,index,array) => {
	acc[value] = ++acc[value] || 1
	return acc;
},{});



function LinkedList(){
	this.head = null;
	this.tail = null;
}

function Node(value){
	this.value = value;
	this.next = null;
}

LinkedList.prototype.add = function (value) {
	var newNode = new Node(value);
	if(!this.head){
		this.head = newNode;
		this.tail = newNode;
	} else {
		this.tail.next = newNode;
		this.tail = newNode;
	}
}

LinkedList.prototype.remove = function(value){
	var current = this.head;
	var previous = this.head;
	while(current){
		if(current.value == value){
			if(current == this.head && current == this.tail) {
				this.head = this.head.next;
				this.tail = previous.next;
			} else {
				if(current == this.head){
					this.head = this.head.next;
				}
				if(current == this.tail){
					this.tail = previous;
				}
			}
			previous.next = current.next
		}
		previous = current;
		current = current.next;
	}

}


LinkedList.prototype.insertAfter = function (value,toNodeElement) {
	var current = this.head;
	var newNode = new Node(value);
	while(current){
		if(current.value == toNodeElement){
			if(current == this.tail){
				this.tail.next = newNode;
				this.tail = newNode;
			} else {
				newNode.next = current.next;
				current.next = newNode;
			}
		}
		current = current.next;
	}

}
var LL = new LinkedList();
LL.add(1)
LL.add(2)
LL.add(3)
LL.add(4)
LL.insertAfter(5,3);



