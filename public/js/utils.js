// define your functions like this so they're testable
function createTimes(){
  let reservationTimes={};
  for(let i=1; i<10;i++){
    reservationTimes[i.toString()+':00']=10;
    if (i!==9){
    reservationTimes[i.toString()+':30']=10;
  }
  }
  console.log(reservationTimes);
  return reservationTimes;
}

function convertToCivTime(hour){
  if (hour > 12){
    hour=hour-12;
  }
  return hour;
}

function convertToDoubleDigits(number){
  if (number.toString().length<2){
    number='0'+number;
  }
  return number
}

function getResTime(reservationDate){
  let resTime=convertToCivTime(reservationDate.getHours())+":"+convertToDoubleDigits(reservationDate.getMinutes());
console.log("ResDate: "+ reservationDate + " ResTime: "+resTime);
  return resTime;

}

function changeReservationFormat(data){
  const newDate=new Date(data);
  console.log("New "+newDate)
  return newDate;
}


function reduceReservations(data){
  let dates = {};
  // if date found, add decrease slot in create times.
  newReservationTime=createTimes();
//  console.log(newReservationTime);
  for (let i=0; i<data.length; i++){
  let resDate=changeReservationFormat(data[i].slot);
  let resTime=getResTime(resDate);
  let resDay=resDate.toDateString();
  if (newReservationTime.hasOwnProperty(resTime)){
        dates[resDay]=newReservationTime
        dates[resDay][resTime]-=1;
    //console.log(new Date(resDay + " "+resTime));
  }
//  console.log(dates)
  }
  console.log(dates);
return dates;
}

// API call to get reservation data




//window.onload=function(){
// export reservationData
//}
