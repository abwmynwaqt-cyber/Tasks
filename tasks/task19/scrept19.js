let carTransport=[{
numberofPassengers:[25,26,27,28,29,30],
passengerFare:3,
numberofMoves:15
}]
let oneMove=carTransport[0].numberofPassengers.map((pass)=> pass*carTransport[0].passengerFare)
console.log("Total capacity per trip: 25 to 30 passengers",oneMove);
let todayTotal=oneMove.map((el)=>el*carTransport[0].numberofMoves)
console.log("Total revenue for 15 trips:",todayTotal);
let nonPayingPassengers=carTransport[0].numberofPassengers.map((el)=>Math.round(el*(1-0.15)*carTransport[0].passengerFare))
console.log("The price after deducting 15% from passengers who do not pay:",nonPayingPassengers);
let Malfunction=carTransport[0].numberofPassengers.map((el)=>Math.round(el*(1-0.70)*carTransport[0].passengerFare))
console.log("Holidays, daily breaks, and fuel:",Malfunction);
let netProfit = nonPayingPassengers.map((el) => Math.round(el * carTransport[0].numberofMoves * (1 - 0.70)));
console.log("Daily net profit:", netProfit);