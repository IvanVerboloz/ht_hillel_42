const userNum = prompt("Введіть трицифрове число (наприклад: 321):");
const validNum = userNum?.trim() || "";

const number = Number(validNum);
const isInt = Number.isInteger(number);
const absStr = Math.abs(number).toString();

if (!isInt || absStr.length !== 3) {
  alert("Помилка: введіть саме ТРИЦИФРОВЕ ціле число!");
} else {
  const [a, b, c] = absStr;

  if (a === b && b === c) {
    alert("Усі цифри однакові");
  } else if (a === b || b === c || c === a) {
    alert("Серед цифр є однакові");
  } else {
    alert("Усі цифри різні");
  }
}
