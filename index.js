const drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];
//-1-
const returnFirstTwoDrivers= ()=>{
    const newDrivers=drivers.slice(0,2);
    return newDrivers;
}

// -2-
const returnLastTwoDrivers= ()=>{
    const newDrivers=drivers.slice(-2);
    return newDrivers;
}

//-3-
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

//-4-
function createFareMultiplier(integer){
   if(integer) {
     return (fare)=> fare*integer;
   }
   return (fare)=>fare*fare;
}

//-5-
const fareDoubler = number => {
    const func =createFareMultiplier(number)
    return func(2)
}

//-6-
const fareTripler= number => {
    const func =createFareMultiplier(number)
    return func(3)
}

//-7-
function selectDifferentDrivers(arrayOfDrivers, func){
  return func(arrayOfDrivers);
}