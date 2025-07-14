const userNum = prompt("Введіть трицифрове число (наприклад: 321):");
const validNum = userNum?.trim() || "";

if (validNum.length !== 3 || !Number.isInteger(+validNum)) {
  alert("Помилка: введіть саме ТРИЦИФРОВЕ ціле число!");
} else {
  const [a, b, c] = validNum;

  if (a === b && b === c) {
    alert("Усі цифри однакові");
  } else if (a === b || b === c || c === a) {
    alert("Серед цифр є однакові");
  } else {
    alert("Усі цифри різні");
  }
}
