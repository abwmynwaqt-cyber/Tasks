
let user=Number(prompt("Enter the number of products you want."));
if(isNaN(user)){
alert("Pleas enter the number")
}
let products=[]
for(let i =0 ; i<user ; i++){
let productinfo ={
name:prompt("Enter the name product"),
price:Number(prompt("Enter the product price")),
amount:Number(prompt("Enter the amount product"))
}
products.push(productinfo)
console.log( "name ="+productinfo.name);
console.log("price ="+productinfo.price);
console.log("amount ="+productinfo.amount);
}

let totalamount=0
let afterdiscount=0
let all=0;
let Discountcounter=0

products.forEach(function(item){
totalamount=item.amount*item.price
if(item.amount>10){
console.log("You got a 10% discount because you bought more than 10 pieces =" +(afterdiscount = totalamount-totalamount*(10/100)));
    Discountcounter++
}
if(item.amount<=10){
    afterdiscount=totalamount
    console.log("There is no discount because the quantity is less than 10 = "+afterdiscount);
    
}
all+=afterdiscount

})
if(all>500){
if(Discountcounter<2){
console.log("You received an additional 20% discount because your total is over 500."+( afterdiscount=all-all*(20/100)));

}else{
console.log("No additional 20% discount was applied because more than two products already received a 10% discount= "+ (afterdiscount=all));
}
}
console.log("Final amount ="+afterdiscount);