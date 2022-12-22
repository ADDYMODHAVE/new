var sub1=document.getElementById("my-form");
sub1.addEventListener("submit",savedata);

function savedata(e){
    e.preventDefault();
var item1=document.getElementById("name").value;
var item2=document.getElementById("email").value;
localStorage.setItem(item1,item2);
}