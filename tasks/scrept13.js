let customer=Number(prompt("Enter the price of the meal you want."))
let food=[{
    name:"Shawarma",
    price:25
},
{
    name:"Calzon",
    price:35
},

{
    name:"Rice and chicken",
    price:50
},
{
    name:"Pizza",
    price:30
},
{
    name:"Syrian shawarma",
    price:45
    
}
]
function Fooduggestions(foods){
let totalprice=0;
foods.forEach(function(food){
    if(customer>food.price+totalprice ){
    totalprice+=food.price
    console.log(food.name);
    console.log(food.price);
    
    }
})
console.log(totalprice)
}
Fooduggestions(food)