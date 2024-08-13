function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    function shooter(i) {
      return function() {
        console.log( i );
      };
    }
    shooters.push(shooter(i));
    i++;
  }
  return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.