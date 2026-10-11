let rentalprofits = {
  Workinghours: Number(prompt("Enter the number of working hours :")),
  rentalprice: Number(prompt("Enter the hourly rental price :")),
};
let error=false
if (isNaN( rentalprofits.Workinghours) || isNaN(rentalprofits.rentalprice)){
alert("Pleas enter the number")
error=true
}else
if (rentalprofits.Workinghours <= 0 || rentalprofits.rentalprice <= 0) {
  alert("Please enter positive numbers");
error=true
}
if(!error){
function Netprofits(earnings){
if(earnings.rentalprice<=30){
return earnings.Workinghours*earnings.rentalprice*(1-40/100)
}
if(earnings.rentalprice>30){
return earnings.Workinghours*earnings.rentalprice*(1-15/100)
}
}
console.log(Netprofits(rentalprofits));
}