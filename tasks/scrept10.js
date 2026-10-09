let user=prompt("ادخل حجر او ورقة او مقص")
let gaem=["حجر"
    ,"ورقة",
    "مقص"
]
let random=Math.floor(Math.random()*3)
let computer=gaem[random]
if(user=="حجر"||user=="ورقة"||user=="مقص"){
alert(computer)
if(user=="حجر"&&computer=="حجر"){
    alert("تعادل")
}else if(user=="حجر"&& computer=="ورقة"){
    alert("خسارة")
}else if(user=="حجر"&&computer=="مقص"){
alert("فوز")    
}else if(user=="ورقة"&&computer=="حجر"){
    alert("فوز")
}else if(user=="ورقة"&&computer=="ورقة"){
alert("تعادل")
}else if(user=="ورقة"&&computer=="مقص"){
    alert("خسارة")
}else if(user=="مقص"&&computer=="حجر"){
    alert("خسارة")
}else if(user=="مقص"&&computer=="ورقة"){
    alert("فوز")
}else if(user=="مقص"&&computer=="مقص"){
     alert("تعادل")
}
}else{
alert("ادخال خاطئ")
}