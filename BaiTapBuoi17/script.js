function isEvenNumber(number) {
  return number % 2 === 0;
}

console.log(isEvenNumber(10));
console.log(isEvenNumber(7));

console.log("-------------");

function getElectricityBill(kwh) {
  let total = 0;

  if (kwh > 400) {
    total += (kwh - 400) * 2927;
    kwh = 400;
  }
  if (kwh > 300) {
    total += (kwh - 300) * 2834;
    kwh = 300;
  }
  if (kwh > 200) {
    total += (kwh - 200) * 2536;
    kwh = 200;
  }
  if (kwh > 100) {
    total += (kwh - 100) * 2014;
    kwh = 100;
  }
  if (kwh > 50) {
    total += (kwh - 50) * 1734;
    kwh = 50;
  }
  if (kwh > 0) {
    total += kwh * 1678;
  }

  return total;
}

console.log(getElectricityBill(70));

console.log(getElectricityBill(120));

console.log("-------------");

function cleanName(name, keyword) {
  let clean = name.trim().toLowerCase();
  let key = keyword.toLowerCase();

  return clean.includes(key);
}

// Test
console.log(cleanName("   NGUYEN Van An   ", "an"));
console.log(cleanName("   Tran Thi B ", "hoang"));
