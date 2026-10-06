let form= document.querySelector("form")
let email=document.querySelector('[name="email"]')
let password=document.querySelector('[name="password"]')
let strengthText = document.querySelector("#strengthText")


form.addEventListener("submit",function(event){
    event.preventDefault()
    let emailValue=email.value
    let passwordValue=password.value
    let massage=""
    if(emailValue.includes("@") &&emailValue.includes(".com")){
     massage+="Email is Correct\n"
    } else{
        massage+="Email is Wrong\n"
    }
    if( passwordValue.length >= 8 && passwordValue.length<=20 &&/[A-Z]/.test(passwordValue) &&/[a-z]/.test(passwordValue) && /[0-9]/.test(passwordValue)){
        massage+="Password is Correct"
    } else{
        massage+="Password is Wrong"
    }
    
    alert(massage)

})

password.addEventListener("input", function() {
    let passwordValue = password.value
    let strengthPercent = (passwordValue.length / 20) * 100

    if (strengthPercent > 100) {
        strengthPercent = 100
    }

    strengthText.textContent = "Password Strength: " + strengthPercent + "%"
})