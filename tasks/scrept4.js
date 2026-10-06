//  السؤال الاول#
// let user={
//     name:prompt("Enter your name"),
//     age:Number(prompt("Enter your age")),
//     hasaccess: true,
//     error:false
// }
// if(isNaN(user.age)){
//     alert("Plase Enter Vild number age")
//     user.error=true;
// }
// if(!(user.error)){
// console.log(user.age>=20 ? user.hasaccess==true:user.hasaccess==false);
// }



// السؤال الثاني#

// let user=[{
//     name:"ayman",
//     emmail:"ayman5651@gami.com",
//     type:"User"
// },
// {
//     name:"Ali",
//     emmail:"ali5651@gami.com",
//     type:"Admin"
// },
// {
//     name:"Ahmad",
//     emmail:"ahmad5651@gami.com",
//     type:"User"
// },
// {
//     name:"Khalil",
//     emmail:"khalil5651@gami.com",
//     type:"Admin"
// },
// {
//     name:"Mohmad",
//     emmail:"mohmad5651@gami.com",
//     type:"User"
// },
// {
//     name:"Khalid",
//     emmail:"khalid5651@gami.com",
//     type:"Admin"
// },
// {
//     name:"Hamza",
//     emmail:"hamza@gami.com",
//     type:"User"
// },
// {
//     name:"Waleed",
//     emmail:"waleed5651@gami.com",
//     type:"Admin"
// },
// {
//     name:"majd",
//     emmail:"majd5651@gami.com",
//     type:"User"
// },
// {
//     name:"Noor",
//     emmail:"noor5651@gami.com",
//     type:"Admin"
// },
// {
//     name:"Mostafa",
//     emmail:"mostafa5651@gami.com",
//     type:"User"
// }
// ]
// let users=0;
// let admins=0;
// user.forEach( function(item){
//     if(item.type=="User")
//     {
//         users++;
//     }if(item.type=="Admin"){
//         admins++;
//     }
// })
// console.log("The number of Users="+users);
// console.log("The number of Admins="+admins);



// السؤال الثالث#
//اكثر من طريقة حل
// let  montages=[
//     {
//         name:"Laptop",
//         price:1000,
//         rating:5
//     },
//     {
//         name:"Smartphone",
//         price:800,
//         rating:4
//     },
//     {
//         name:"Headphones",
//         price:100,
//         rating:3
//     },
//     {
//         name:"Keyboard",
//         price:70,
//         rating:2
//     },
//     {
//         name:"Mouse",
//         price:50,
//         rating:2
//     },
//     {
//         name:"Monitor",
//         price:250,
//         rating:5
//     },
// ]
// montages.forEach(function(item){
//     if(item.rating>3){
//         console.log(item.name + " " + "⭐".repeat(item.rating));
//   {
    
// }
//  }

// })


// console.log(item.rating>3 ? item.name+""+"⭐".repeat(item.rating):"Rating less than three");


// montages.forEach(function(item){
//     let start=""
//     if(item.rating>3){
//         console.log(item.name);
//         for(let i=0; i<item.rating;i++){
//         start+="⭐"
                
//         }
//         console.log(start);
//     {
    
// }
//  }
  
// })




// السؤال الرابع#
// let article=[{
//     id:"aaabbbd",
//     title:"Freedom",
//     contact:"Freedom is the right to express yourself",
//     img:"aymanmaein"
// },
// {
//     id:"bbbbbbb",
//     title:"JavaScripthi",
//     contact:"Java is a powerful programming language used to build applications and software.",

// },
// {
//     id:"ddddddd",
//     title:"Website",
//     contact:"Websites allow people to share information, communicate, and access useful services online.",
//     img:"mahmmoud"
// },
// {
//     id:"aaaaaaaaaa",
//     title:"Front-End Development",
//     contact:"Front-end development focuses on creating the visual and interactive parts of websites that users see and use."
// },
// {
//     id:"hhhhhhhh",
//     title:"Programming",
//     contact:"Programming is the process of writing instructions that tell computers what to do.",
//     img:"Ahmad"
// }
// ]
// article.forEach(function(item){
//  console.log(item.img ? item.img:"defult imge");
// })


// السؤال الخامس#

// let user=[{
// number:Number(prompt("Enter is Number")),
// mul:[],
// error:false
// }]
// if(isNaN(user[0].number)){
//     alert("pleas enter the number")
// user[0].error=true
// }
// if(!user[0].error){
// let mult=1
// user.forEach(function(item){
// for(let i=1; i<=item.number;i++){
// item.mul.push(i)
// }
// item.mul.forEach(function(num){
// mult=mult*num
// })
// })
// console.log(mult);
// }