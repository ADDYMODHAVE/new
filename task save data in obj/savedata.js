var sub1=document.getElementById("my-form");
sub1.addEventListener("submit",savedata);

function savedata(e){
    e.preventDefault();
var item1=document.getElementById("name").value;
var item2=document.getElementById("email").value;
var details={
        name:item1,
       email:item2,
    };
var convertstring=JSON.stringify(details);
localStorage.setItem("data",convertstring);
// localStorage.setItem(item1,item2);
}
// var item1=document.getElementById("name").value;
//  var item2=document.getElementById("email").value;
// var details={
//     name:item1,
//    email:item2
// };
// // we have to use jason stringify to convert
// var convertstring=JSON.stringify(details);
// // console.log(convertstring)
// // local storage only store strings thats why we have to convert it into string
// localStorage.setItem("data",convertstring);
// // if want convert string again in object
// // let againobject=JSON.parse(localStorage.getItem("data"));
// // console.log(againobject);