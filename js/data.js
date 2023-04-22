import { getRandomInt, getRandomElementArr } from './util.js';

const photos = [];
const numberOfPhotos = 25;
const likes = {
  MIN: 15,
  MAX: 200,
}

const names = [
  'Серёга',
  'Артём',
  'Дима',
  'Егор',
  'Лёша',
  'Денис',
  'Славик',
  'Тёмыч',
  'Батя',
  'Банан Серафимович',
];

const descriptionPhoto = [
  'No Filter',
  'Отец фотографии',
  'Зацените фотку!',
  'Хороший ракурс',
  'Твой кот оценит',
  'Мой скилл растёт',
];

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
]

const addComments = () => {
  const commentsArr = [];
  for (let i = 0; i < getRandomInt(3, 10); i++) {
    commentsArr.push({
      id: getRandomInt(0, 999),
      avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
      message: getRandomElementArr(comments),
      name: getRandomElementArr(names),
    })
  }
  return commentsArr;
}

const addPhotos = () => {
  for (let i = 0; i < numberOfPhotos; i++) {
    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomElementArr(descriptionPhoto),
      likes: getRandomInt(likes.MIN, likes.MAX),
      comments: addComments(),
    })
  }
}
addPhotos();

export default photos;
