"use strict"
var min={method:'GET',
headers:{
'Content-Type' :'application/json'
},
mode:'cors',
cache:'default'}
let m=new Request("/data.json",min)

fetch(m)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data[0]);
    });

    