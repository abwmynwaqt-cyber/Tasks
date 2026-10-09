let findword=["Contactnumber","digital","Wecommunicate","WhatsApp","Telegram","Myprivatenumber"]
let massage=prompt("Enter any sentence")
function filterword(word){
return massage.includes(word)
}
let result = findword.filter(filterword);
if(result.length>=2){
console.log("You are not welcome on this site.");

}else {
    console.log("Welcome to the site.");
}