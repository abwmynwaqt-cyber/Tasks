let student=[{
    name:"Ayman nasser",
marks:[80,70,90,85,88,95],
major:"Multi",
Average(){
return this.marks.reduce((acc,mark)=>acc+mark,0)/this.marks.length 
}
},

{
    name:"Mahmmoud ahmad",
marks:[75,65,50,55,85,79],
major:"accounting",
Average(){
return this.marks.reduce((acc,mark)=>acc+mark,0)/this.marks.length
}
},
{
name:"Khaled mahmmoud",
marks:[45,50,40,48,70,55],
major:"medicine",
Average(){
return this.marks.reduce((acc,mark)=>acc+mark,0)/this.marks.length
}
},
{
name:"Khaled mahmmoud",
marks:[75,90,100,70,80,60],
major:"nursing",
Average(){
return this.marks.reduce((acc,mark)=>acc+mark,0)/this.marks.length
}
},
{
name:"Khaled mahmmoud",
marks:[94,83,77,48,70,55],
major:"Computer engineering",
Average(){
return this.marks.reduce((acc,mark)=>acc+mark,0)/this.marks.length
}
},
{
name:"Khaled mahmmoud",
marks:[85,70,87,51,74,95],
major:"Interior design",
Average(){
return this.marks.reduce((acc,mark)=>acc+mark,0)/this.marks.length
}
}
]

let Aver=student.map((el)=>el.name+" : "+el.Average())
console.log(Aver);
let Successful=student.filter((el)=>el.Average()>50)
console.log(Successful);
let Repeaters=student.filter((el)=>el.Average()<50)
console.log(Repeaters);

let passAve=Successful.length/student.length*100
console.log("Pss Aver ="+passAve+"%");
let filedAve=Repeaters.length/student.length*100
console.log("Filed Aver ="+filedAve+"%");

let highestrate = student.reduce((acc, stu) => acc.Average() > stu.Average() ? acc : stu);

console.log(highestrate);


