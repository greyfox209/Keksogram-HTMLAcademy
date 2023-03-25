// Генерация случайного числа
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomInt(1, 10);

// Проверка длины строки
const stringCount = (string, maxCount) => {
  return string.length <= maxCount;
};

stringCount('Test message', 15);

// Генерация случайного элемента массива
const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

export { getRandomInt, stringCount, getRandomElementArr };
