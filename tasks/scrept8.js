
let user=Number(prompt("Enter the number"))
function factiril(n){
    if(n==1){
    return 1;
    }
    return n*factiril(n-1)
    
}
let result=factiril(user)
console.log(result);
