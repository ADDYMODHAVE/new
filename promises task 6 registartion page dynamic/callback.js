const posts = [
    
    {title: 'post one', body:'this is post one', createdAt: new Date().getSeconds()},
    {title: 'post two', body:'this is post two', createdAt: new Date().getSeconds()}
];
let intervalId = 0;
function getPost(){
clearInterval(intervalId)
intervalId = setTimeout(()=>{
    let output = '';
    posts.forEach((post,index)=>{
        output += `<li>${post.title}- last updated ${new Date().getSeconds() - post.createdAt} seconds ago</li>`
    });
    document.body.innerHTML = output;
},1000);
}
function createPost(post){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt: new Date().getSeconds()});
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: something went wrong');
            }
        },1000)
    })
}
function create4thPost(post,callback){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt: new Date().getSeconds()});
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: something went wrong');
            }
        },2000)
    })
}
function deletePost(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                const lastElement = posts.pop()
                resolve(lastElement);
            }
            else{
                reject('Array is empty now');
            }
        },1000)
    })

}
create4thPost({title:'post three', body:'this is post three'}).then(getPost);
create4thPost({title:'post four', body:'this is post four'})
.then(()=>{
    getPost();
    deletePost().then(()=>{
        getPost();
        deletePost().then(()=>{
            getPost()
            deletePost().then(()=>{
                getPost()
                deletePost().then(()=>{
                    getPost()
                deletePost().then(()=> {})
                .catch((err)=> console.log( err));
            }).catch((err)=>{})
        }).catch((err)=>{})
    }).catch((err)=> {})
    }).catch((err)=>{})
})
.catch((err)=> console.log(err));

// function promises(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve(console.log("last activity time is "+new Date().toLocaleTimeString()));
//        },1000)  
//     })
// }

// Promise.all([createPost({title:"post three",body:"body of post three"})])
// .then(()=>{
//     getPost();  
//     deletePost().then(()=>{
//         getPost();
//         promises()   
//     })  
// })
