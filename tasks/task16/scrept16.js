let text=" Ayman    Maein  hassan  Nasser !#$"
function filtertext(text){
text = text.replaceAll(/[!@#$%^&*()_+\-={}\[\]:;"'<>,.?/\\|~]/g,"");
text =text.replaceAll(/  +/g," ");
return text
}
console.log(filtertext(text));