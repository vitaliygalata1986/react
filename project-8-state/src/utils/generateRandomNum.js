function generateRandomNum(maxNum) {
  // console.log(maxNum);
  // так как это не компоеннт реакт, то использем c.case нотацию, где первая буква - маленькая
  return Math.floor(Math.random() * maxNum); // если мы хотим генерировать число в диапазоне от 0 до 100 и округлять его до целого
}

export default generateRandomNum;
