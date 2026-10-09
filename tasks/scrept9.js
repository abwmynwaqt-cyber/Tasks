
let get =Number(prompt("Enter the number"))
if(isNaN(get)){
alert("Pleas enter the number")
}
let randomnumber= Math.floor(Math.random()*50+1)
console.log(randomnumber);

while(get!=randomnumber){
    if(get>randomnumber){
    alert("The number is higher. Try again")
    }else if(get<randomnumber){
    alert("The number is smaller. Try again")
    }
    get=Number(prompt("Try again"))
}