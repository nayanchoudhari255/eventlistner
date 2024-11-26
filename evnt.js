//eventlistener:listn the event and perform action 2 para
//event bubbling :bottom to top event performing 3 things that third thing called usecapture it true or false
//false is bubbling and true and event trickling or capturing is false
// trickling or capturing is top to bottom work

// let a=document.querySelector('#btn');
// a.addEventListener("click",function(){
//     alert("this is event listener")
// })

document.querySelector("#gp").addEventListener("click",function(){
    console.log("this is gp");
    
},true)//usecapture bubble
document.querySelector("#p").addEventListener("click",function(){
    console.log("this is p");
    
},false)//capturing first pr
document.querySelector("#ch").addEventListener("click",function(){
    console.log("this is ch");
    
},true)