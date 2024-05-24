let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

alert(menu.width);
multiplyNumeric(menu);
alert(menu.width);

function multiplyNumeric(menu) {
  for ( let i in menu) {
    if (typeof menu[i] == 'number') {
      menu[i] = menu[i] * 2 
    };
  };
};