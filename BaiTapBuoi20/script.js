const numbers = [9, 8, 3, 5, 6, 2, 7, 9];
// Expected result: 8

function findSecondLagestNum(arrNumbers) {
  if (arrNumbers.length < 2) return;

  let maxValue = null;
  let secondValue = null;
  maxValue = arrNumbers[0];

  for (const number of arrNumbers) {
    if (maxValue < number) {
      secondValue = maxValue;
      maxValue = number;
    } else if (number !== maxValue && number > secondValue) {
      secondValue = number;
    }
  }

  return secondValue;
}

console.log(findSecondLagestNum(numbers));
console.log("---------------------");

const classA = [15, 2, 8, 10];
const classB = [8, 11, 2, 5, 9];

// Step 1 & 2: [15, 2, 8, 10, 11, 5, 9]
// Step 3: Quick Sort -> [2, 5, 8, 9, 10, 11, 15]

const numbersMap = {};
const filteredNumbers = [];
const mergeAB = [...classA, ...classB];

for (const number of mergeAB) {
  if (numbersMap[number]) {
    continue;
  }
  numbersMap[number] = true;
  filteredNumbers.push(number);
}

console.log(filteredNumbers);

function quickSort(numbers) {
  if (numbers.length < 1) return numbers;
  const midNum = numbers[Math.floor(numbers.length / 2)];

  const leftArr = [];
  const rightArr = [];

  for (const number of numbers) {
    if (number === midNum) continue;

    if (number < midNum) {
      leftArr.push(number);
    } else {
      rightArr.push(number);
    }
  }
  return [...quickSort(leftArr), midNum, ...quickSort(rightArr)];
}

console.log(quickSort(filteredNumbers));
