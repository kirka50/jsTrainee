let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}


function calculateSallary(sallaryObj) {
  let totalSallary = 0;
  if (!isEmptyObject(sallaryObj)) {
    for (let sallaryPerson in sallaryObj) {
      totalSallary += sallaryObj[sallaryPerson];
    }
  }
  return totalSallary;
}


function isEmptyObject(obj) {
  for (let key in obj) {
    return false;
  };
  return true;
}