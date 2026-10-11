
let name1="Ali";
let name2="Ahmad";
let name3="Majd";
let name4="Mohmmad";
let name5="Mahmmoud";
let name6="Khalil";
let name7="Kmal";
let name8="Mohand";
let name9="Braa";
let name10="Noor";
function pepole(...nems){
if(nems.length>10){
   console.log("  هيك كثير يبن عم بديش اكثر من عشرة");
} console.log(nems.slice(0,10));
let Namelength=0
let namme=""
nems.slice(0,10).forEach(function(item){
if(item.length>Namelength){
Namelength=item.length
namme=item
}
})
console.log(namme);

}
pepole(name1,name2,name3,name4,name5,name6,name7,name8,name9,name10,"jehad")


