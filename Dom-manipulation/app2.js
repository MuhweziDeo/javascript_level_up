const items=document.getElementsByClassName('items');
console.log(items)
console.log(items[0]);

items[2].style.color='red';
// get element by Tagname
let liz=document.getElementsByTagName('li')
console.log(liz)
console.log(liz[0]);
// convert html collection into array
liz=Array.from(liz)
liz.reverse();
liz.forEach(function(li){
console.log(li)
console.log(li.className)
})
console.log(liz)

// query selector all()
const items=document.querySelectorAll('li.items');
console.log(items)