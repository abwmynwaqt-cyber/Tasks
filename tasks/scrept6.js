let usersnumber=Number(prompt("Enter the number of users you want"));
if(isNaN(usersnumber)){
alert("Pleas Enter the number")
}
let user=[]

for(let i=0 ; i<usersnumber ; i++){
let datausers={
name:prompt("Enter the name :"),
email:prompt("Enter the email :")
}
user.push(datausers);
}
function filterEmail(email){
return! email.includes("test") && email.includes("@") && email.includes(".com")
}
let realusers = user.filter(function(user){
return filterEmail(user.email);
}
);
user.forEach(function(item){
if(!filterEmail(item.email)){
console.log("This user is excluded");
}
});
