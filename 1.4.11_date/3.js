let date = new Date(2012, 0, 1);  // 3 января 2012 года
console.log( getLocalDay(date) );   

function getLocalDay(date) {
  if (date.getDay() == 0) {
    return 7
  } else return date.getDay()
}