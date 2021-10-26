


//-*****************-> 1.TASK 
/* let address = {
  street: "Mustaqillik",
  city: "Namangan",
  zipcode: 161117
};
function showAddress(obj) {
  for (let keys in obj) {
    if (typeof obj[keys]) console.log(keys, obj[keys]);
  }
}
showAddress(address); */

//------------------------------ 2.usul

let address = {
  street: "Mustaqillik",
  city: "Namangan",
  zipcode: 161117
};
function showAddress(address) {
  for (let key in address) {
     console.log(key, ':', address[key]);
  }
}
showAddress(address);
