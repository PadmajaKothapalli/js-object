//javascript array using "forof"

let a=[{id:67,name:"Pavan",hobbies:"playing ludo"},
       {id:71,name:"Pavithra",hobbies:"eating food"},
       {id:77,name:"Nithya",hobbies:"sleeping"},
       {id:79,name:"Padmaja",hobbies:"reading books"}]
for(key of a){
    console.log(key.name);
    console.log(key.hobbies);
}