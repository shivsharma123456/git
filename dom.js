var header = document.querySelector('#main-header');
header.style.borderBottom= 'solid 4px #ccc';
var input = document.querySelector('input');
input.value = 'Hello World'
var submit = document.querySelector('input[type="submit"]');
submit.value="SEND" 
var seconditem  = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'green';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)'); 
thirdItem.style.color = 'coral';
// // QUERYSELECTORALL //

// var titles= document.querySelectorAll('.title');

// console.log(titles);

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)'); 
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){ 
// odd[i].style.backgroundColor = '#f4f4f4'; 
// even[i].style.backgroundColor = '#ccc';

// TRAVERSING THE DOM
var itemList = document.querySelector('#items'); 
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4'; 
console.log(itemList.parentNode.parentNode.parentNode);
// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentElement.parentElement.parentElement);
// childNodes
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';
// Firstchild
console.log(itemList.firstChild);
// fristElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

// lastchild
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling);

// nextElementSibling
console.log(itemList.nextElementSibling);

// previouSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
// createElement
// Create a div

var newDiv= document.createElement('div');

// Add class

newDiv.className= 'hello';

// Add id

newDiv.id = 'hello1';

// Add attr

newDiv.setAttribute('title', 'Hello Div');

console.log(newDiv);
// Create text node

var newDivText = document.createTextNode('Hello World');

// Add text to div newDiv.appendChild(newDivText);

var container = document.querySelector('header .container'); 
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);