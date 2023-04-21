import { getRandomInt, getRandomElementArr } from './util.js';

const PHOTO_COUNT = 25;

const NAMES = [
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

const DESCRIPTION_PHOTO = [
  'No Filter',
  'Отец фотографии',
  'Зацените фотку!',
  'Хороший ракурс',
  'Твой кот оценит',
  'Мой скилл растёт',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 1,
  MAX: 5,
};

const CommentIdNumber = {
  MIN: 0,
  MAX: 999,
};

const AvatarNumber = {
  MIN: 1,
  MAX: 6,
};

let photos = [];

const addPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomElementArr(DESCRIPTION_PHOTO),
      likes: getRandomInt(Likes.MIN, Likes.MAX),
      comments: [{
        id: getRandomInt(0, 999),
        avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
        message: getRandomElementArr(MESSAGES),
        name: getRandomElementArr(NAMES),
      }],
    });
  }
};

addPhotos();

export default photos;
