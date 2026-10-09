let datausers = [
    {name: "Ahmad", weight: 80},
    {name: "Ali", weight: 90},
    {name: "Omar", weight: 75},
    {name: "Sara", weight: 60},
    {name: "Lina", weight: 55},
    {name: "Khaled", weight: 100},
    {name: "Noor", weight: 65},
    {name: "Yousef", weight: 85},
    {name: "Mona", weight: 70},
    {name: "Adam", weight: 95}
];

function user(datausers) {
    let totalwei = 0;

    datausers.forEach(function(data) {
        totalwei += data.weight;
    });

    if (datausers.length >= 10 || totalwei >= 1000) {
        console.log("I have an excess load");
    }
}

user(datausers);