

const addExpenseToCrud= document.getElementById("store")
console.log(addExpenseToCrud)

addExpenseToCrud.addEventListener("submit",function (event) {

    event.preventDefault()
    console.log("success")
// get the values with help of name
    const amount=event.target.amount.value

    const description=event.target.description.value

    const category= event.target.selectcategory.value

    var obj={
        amount,
        description,
        category
    }

    axios.post("https://crudcrud.com/api/be41b954f1194ae2853f70ea85706b2d/apointment_datas",obj)
    .then((res)=>{
     showExpenseOnScreen(res.data);
    })
    .catch((err)=>{
     console.log(err);
    })
})

function showExpenseOnScreen(obj){

    document.getElementById("expense").value="";
    document.getElementById("movie").value="";
    document.getElementById("type").value="";

   

    const parentNode=document.getElementById("listofamount")

    const childHtml=`<li  style="padding-left:90px " id=${obj._id}> ${obj.amount}  ${obj.description}  ${obj.category}  <button onclick=deleteUser('${obj._id}') class="btn btn-outline-danger m-2"> Delete </button> 
    <button onclick=editUserDetails('${obj.amount}','${obj.description}','${obj.category}','${obj._id}') class="btn btn-outline-success m-2">Edit User </button>
    </li>`

    parentNode.innerHTML=parentNode.innerHTML+childHtml;
}

function removeIt(description) {
// only for deleting the added items from the screen
       const parentNode=document.getElementById("listofamount")
      const childHtmlToBeDeleted=document.getElementById(description);

       if(childHtmlToBeDeleted){
        parentNode.removeChild(childHtmlToBeDeleted)
       }

}

function deleteUser(description) {

    axios.delete(`https://crudcrud.com/api/be41b954f1194ae2853f70ea85706b2d/apointment_datas/${description}`)
    .then((res)=>{
     removeIt(description);
    })
   .catch((err)=>{
   console.log(err);
   })

}

function editUserDetails(amount,description,category,userid) {

    document.getElementById('expense').value=amount;
    document.getElementById('movie').value=description;
    document.getElementById("type").value= category;
// delete the value from the crud crud
   deleteUser(userid)


}

window.addEventListener("DOMContentLoaded",()=>{
 
    axios.get("https://crudcrud.com/api/be41b954f1194ae2853f70ea85706b2d/apointment_datas")
    .then((res)=>{
      
      for(var i=0;i<res.data.length;i++){
        showExpenseOnScreen(res.data[i]);
      }
  
    })
    .catch((err)=>{
      console.log(err);
    })
      
  })