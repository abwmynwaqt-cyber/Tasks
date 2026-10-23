let deceased = [
    
    {
        name: "Ayman Nasser",
        id: 1,
        birthDate: new Date("1985-08-20"),
        deathDate: new Date("2024-01-15"),
        section: "A",
        graveNumber: 1
    },
    {
        name: "Mahmoud Ahmad",
        id: 2,
        birthDate: new Date("1985-08-20"),
        deathDate: new Date("2023-11-02"),
        section: "A",
        graveNumber: 2
    },
    {
        name: "Khaled Hassan",
        id: 3,
        birthDate: new Date("1992-03-14"),
        deathDate: new Date("2024-06-18"),
        section: "A",
        graveNumber: 3
    },
    {
        name: "Omar Ali",
        id: 4,
        birthDate: new Date("1978-12-01"),
        deathDate: new Date("2022-09-10"),
        section: "A",
        graveNumber: 4
    },
    {
        name: "Yousef Ibrahim",
        id: 5,
        birthDate: new Date("2005-07-22"),
        deathDate: new Date("2025-02-11"),
        section: "A",
        graveNumber: 5
    },

    {
        name: "Hassan Ibrahim",
        id: 11,
        birthDate: new Date("1988-02-11"),
        deathDate: new Date("2023-04-18"),
        section: "B",
        graveNumber: 1
    },
    {
        name: "Salem Khalil",
        id: 12,
        birthDate: new Date("1975-06-23"),
        deathDate: new Date("2022-10-14"),
        section: "B",
        graveNumber: 2
    },
    {
        name: "Rami Ahmad",
        id: 13,
        birthDate: new Date("1990-01-09"),
        deathDate: new Date("2024-03-05"),
        section: "B",
        graveNumber: 3
    },
    {
        name: "Nabil Omar",
        id: 14,
        birthDate: new Date("1965-11-17"),
        deathDate: new Date("2023-08-22"),
        section: "B",
        graveNumber: 4
    },
    {
        name: "Faris Ali",
        id: 15,
        birthDate: new Date("2001-04-12"),
        deathDate: new Date("2025-01-30"),
        section: "B",
        graveNumber: 5
    },

    {
        name: "Majed Nasser",
        id: 21,
        birthDate: new Date("1979-01-13"),
        deathDate: new Date("2023-02-20"),
        section: "C",
        graveNumber: 1
    },
    {
        name: "Ziad Ahmad",
        id: 22,
        birthDate: new Date("1991-08-04"),
        deathDate: new Date("2024-07-12"),
        section: "C",
        graveNumber: 2
    },
    {
        name: "Anas Khalil",
        id: 23,
        birthDate: new Date("1968-05-19"),
        deathDate: new Date("2022-11-25"),
        section: "C",
        graveNumber: 3
    },
    {
        name: "Hani Ibrahim",
        id: 24,
        birthDate: new Date("1983-10-07"),
        deathDate: new Date("2023-09-16"),
        section: "C",
        graveNumber: 4
    },
    {
        name: "Bilal Hassan",
        id: 25,
        birthDate: new Date("2003-02-28"),
        deathDate: new Date("2025-05-10"),
        section: "C",
        graveNumber: 5
    }
];
let graves = [
{ section: "A", graveNumber: 1, deceasedId: 1 },
    { section: "A", graveNumber: 2, deceasedId: 2 },
    { section: "A", graveNumber: 3, deceasedId: 3 },
    { section: "A", graveNumber: 4, deceasedId: 4 },
    { section: "A", graveNumber: 5, deceasedId: 5 },
    { section: "A", graveNumber: 6, deceasedId: null },
    { section: "A", graveNumber: 7, deceasedId: null },
    { section: "A", graveNumber: 8, deceasedId: null },
    { section: "A", graveNumber: 9, deceasedId: null },
    { section: "A", graveNumber: 10, deceasedId: null },

    { section: "B", graveNumber: 1, deceasedId: 11 },
    { section: "B", graveNumber: 2, deceasedId: 12 },
    { section: "B", graveNumber: 3, deceasedId: 13 },
    { section: "B", graveNumber: 4, deceasedId: 14 },
    { section: "B", graveNumber: 5, deceasedId: 15 },
    { section: "B", graveNumber: 6, deceasedId: null },
    { section: "B", graveNumber: 7, deceasedId: null },
    { section: "B", graveNumber: 8, deceasedId: null },
    { section: "B", graveNumber: 9, deceasedId: null },
    { section: "B", graveNumber: 10, deceasedId: null },

    { section: "C", graveNumber: 1, deceasedId: 21 },
    { section: "C", graveNumber: 2, deceasedId: 22 },
    { section: "C", graveNumber: 3, deceasedId: 23 },
    { section: "C", graveNumber: 4, deceasedId: 24 },
    { section: "C", graveNumber: 5, deceasedId: 25 },
    { section: "C", graveNumber: 6, deceasedId: null },
    { section: "C", graveNumber: 7, deceasedId: null },
    { section: "C", graveNumber: 8, deceasedId: null },
    { section: "C", graveNumber: 9, deceasedId: null },
    { section: "C", graveNumber: 10, deceasedId: null }
];
let visitors = [
    {
        id: 1,
        name: "Ahmad",
        visitDate: new Date("2026-01-15"),
        deceasedId: 1
    },
    {
        id: 2,
        name: "Mahmoud",
        visitDate: new Date("2026-02-20"),
        deceasedId: 2
    },
    {
        id: 3,
        name: "Khaled",
        visitDate: new Date("2026-03-05"),
        deceasedId: 3
    },
    {
        id: 4,
        name: "Omar",
        visitDate: new Date("2026-04-12"),
        deceasedId: 1
    },
    {
        id: 5,
        name: "Yousef",
        visitDate: new Date("2026-05-25"),
        deceasedId: 4
    },
    {
        id: 6,
        name: "Sami",
        visitDate: new Date("2026-06-10"),
        deceasedId: 5
    },
    {
        id: 7,
        name: "Tareq",
        visitDate: new Date("2026-07-18"),
        deceasedId: 2
    },
    {
        id: 8,
        name: "Fadi",
        visitDate: new Date("2026-08-08"),
        deceasedId: 3
    },
    {
        id: 9,
        name: "Nader",
        visitDate: new Date("2026-09-14"),
        deceasedId: 4
    },
    {
        id: 10,
        name: "Bilal",
        visitDate: new Date("2026-10-16"),
        deceasedId: 5
    }
];
let ageDeath = deceased.map((el) => (el.deathDate - el.birthDate) / (1000 * 60 * 60 * 24 * 365));
console.log(ageDeath);
let sectionNumber = prompt("Enter section number (A, B, or C):");
if(sectionNumber=="A"||sectionNumber=="B"||sectionNumber=="C"){
let findEmptyGraves=graves.filter((el) =>sectionNumber==el.section&& el.deceasedId==null)
console.log(findEmptyGraves)
}else{ alert("There is no number for this section.")}
let yearDeath=prompt("Enter the year of death")
let searchYear=deceased.filter((el)=> yearDeath==el.deathDate.getFullYear())
console.log(searchYear,"Names");
let result = visitors.filter((el) => el.deceasedId==1);
console.log("Number of visitors: " + result.length);
let sortedGraves = graves
.map((grave) => {
let visitsCount = visitors.filter((visitor) => visitor.deceasedId === grave.deceasedId ).length;
return {...grave,visitsCount: visitsCount };})
.sort((a, b) => b.visitsCount - a.visitsCount);
console.log(sortedGraves);
let fromDate = new Date(prompt("Enter start date (YYYY-MM-DD):"));
let toDate = new Date(prompt("Enter end date (YYYY-MM-DD):"));
let from=visitors.filter((el)=>el.visitDate>=fromDate&&el.visitDate<=toDate )
console.log(from);
