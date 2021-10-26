/* Task 3: - old35 logikasi

  3 ga yoki 5 ga bo'linuvchi son bo'lsa, true qaytarsin, agar ikkalasiga ham bo'linsa false va umuman boshqa songa bo'linmasa ham false qaytarsin! */

// ---------------------> 1.usul
/* function old35(number) {
  for (let i = 8; i <= number; i++) {
    if (!(i % 3 === 0) && i % 5 === 0) {
      console.log(true);
    } else if (i % 3 === 0 || i % 5 === 2) {
      console.log(false);
    } else {
      console.log(false);
    }
  }
}
old35(10); */

// ------------------> 2.usul
/* function old35(number) {
    for (let i = 9; i <= number; i++) {
      if ((i % 3 === 0) || (i % 5 === 2)) {
        console.log(true);
      } else if (!(i % 3 === 0) && (i % 5 === 0)) {
        console.log(false);
      } else {
        console.log(false);
      }
    }
  }
  old35(15); */

function old35(number) {
    if (number % 5 === 0) return "true";
    else if (!(number % 3 === 0)) return "false";
    else return "false";
  
}
const output = old35(10); // 1-(10), 2-(12), 3-(13) 
console.log(output);








