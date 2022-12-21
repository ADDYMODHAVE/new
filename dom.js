var edit=document.getElementsByClassName("list-group-item");
edit[2].style.backgroundColor="green"; 
// for changing the color
// for making the bold
for(var i=0;i<edit.length;i++){
    edit[i].style.fontWeight="bold";
}
var tag=document.getElementsByTagName("li");
console.log(tag);
for(var i=0;i<tag.length;i++){
       tag[i].style.fontWeight="bold";
     }
tag[4].style.color="red";