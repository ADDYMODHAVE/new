// using bind

// let multiplay=function(x,y){
//     console.log(x*y);
// }
// // if we pass nothing
// // let multiplayb2=multiplay.bind();
// // multiplayb2(2,3);

// // if we fix one value
// let multiplayb2=multiplay.bind(this,3);
// multiplayb2(8);

// // op=24

// using closure
let multiplay1=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplayb2=multiplay1(2);
multiplayb2(8);