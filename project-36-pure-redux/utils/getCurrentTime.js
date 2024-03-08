function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0'); // если длина строки меньше чем 2, то добавляем символ '0'
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime;
}
export default getCurrentTime;
