function getSecondsToTommorow() {
  let now = new Date();

  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = now - today;
  return Math.abs(Math.round(diff / 1000));
}

console.log( getSecondsToTommorow() );