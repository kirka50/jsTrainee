let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );   

function getLocalDay(date) {
  switch (date.getDay()){
    case 0:
      return 'ВС'
    case 1:
      return 'ПН'
    case 2:
      return 'ВТ'
    case 3:
      return 'СР'
    case 4:
      return 'ЧТ'
    case 5:
      return 'ПТ'
    case 6:
      return 'ПТ'
    }
}