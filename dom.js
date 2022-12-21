// // var edit=document.getElementsByClassName("list-group-item");
// // edit[2].style.backgroundColor="green"; 
// // // for changing the color
// // // for making the bold
// // for(var i=0;i<edit.length;i++){
// //     edit[i].style.fontWeight="bold";
// // }
// // var tag=document.getElementsByTagName("li");
// // console.log(tag);
// // for(var i=0;i<tag.length;i++){
// //        tag[i].style.fontWeight="bold";
// //      }
// // tag[4].style.color="red";

// var item2=document.querySelector(".list-group-item:nth-child(2)");
// item2.style.backgroundColor="green";
// var item3=document.querySelector(".list-group-item:nth-child(3)");
// item3.style.display="none";

// var itemsall=document.querySelectorAll(".list-group-item");
// itemsall[0].style.color="green";

// var odd=document.querySelectorAll("li:nth-child(odd)");
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="green";
// }

// here are we select the items id with query selector

var items=document.querySelector("#items");
// // here the parent node is
// console.log(items.parentNode);
// // div withe card card body
// items.parentNode.style.backgroundColor="red";
// console.log(items.parentNode.parentNode);
// // parentelemt work same like parent node
// console.log(items.parentElement);

//childnode
// console.log(items.childNodes);
// in the output it shows text which is nothing but new line

// // childrean
// console.log(items.children);
// // not shows the text for new line so prefer childrean
// // we can also access like matrix
// items.children[2].style.backgroundColor="red";

// firstchild
// it gives same the text for the new line
// insted of this use element word
// console.log(items.firstChild);
// console.log(items.firstElementChild);
// this not gives the new text for the line


// // lastchild same as that of the first child
// items.lastElementChild.style.color="red";

// nextsiblings means the basically next element
// same here their is important role of the element

// // previous siblings
// console.log(items.previousSibling);
// console.log(items.previousElementSibling);
// items.previousElementSibling.style.color="red";


// creating actually element

// create div
// createElement which is used to create element 
var newdiv=document.createElement("div");
// add class
newdiv.className="class";
// add id
newdiv.id="name";
// add attributes
// in this their are two parameter first one is the title or name and seconldy the value
newdiv.setAttribute("title","value or name");
// create text actual
var actaultext=document.createTextNode("hello");
// here we append the text in div
newdiv.appendChild(actaultext);
// console.log(newdiv)
var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");

container.insertBefore(newdiv,h1);
// if we have to select a particular line mention tag then class or id
var item1=document.querySelector("body #items");
var item2=document.querySelector("body .list-group-item");

item1.insertBefore(newdiv,item2);