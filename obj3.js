//js object using "forin"
let a={
    Fname:"sana",
    Lname:"karamala",
    nickname:"Akhi",
    id:67,
    sal:"35000",
    email:"akhi2@gmail.com",
    hobbies:"playing ludo,eating food"
}
console.log(a);
a.sal=45000;
for( key in a ){
    console.log(a[key]);
}