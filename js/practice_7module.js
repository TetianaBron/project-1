//filter

const arr = [1, 2, '3', 4, 5];

console.log(...arr.filter((el, i) => el % 2 === 1));
console.log(...arr.filter((el, i) => el % 2 === 0));
console.log(
  ...arr.filter((el, i) => {
    if (el > 3) return true;
  }),
);

// map
console.log(
  ...arr.map(el => {
    if (el % 2 === 1) return el - 3;
    return el + 1;
  }),
);

console.log(...arr.map(el => (el % 2 === 0 ? el - 3 : el + 1)));

//reduce
console.log(arr.reduce((ac, el, i) => ac + +el));

const objects = [
  {
    name: 'Mary',
    age: 21,
  },
  {
    name: 'Ann',
    age: 23,
  },
  {
    name: 'Vova',
    age: 24,
  },
  {
    name: 'Misha',
    age: 32,
  },
  {
    name: 'Vadim',
    age: 32,
  },
];
console.log(
  objects.reduce(
    (acc, person) => {
      if (acc.age >= person.age) return acc;
      return person;
    },
    { age: 30 },
  ),
);

function htmlGalleryReduce() {
  return images.reduce((acc, { url, alt }) => {
    acc += `<li class='gallery__item'><img class='gallery__image' src="${url}" alt="${alt}"></li>`;
    return acc;
  }, '');
}

console.log(1 === '1');
console.log(1 == '1');

console.log(+'123.5');
console.log(parseInt('123.5'));
console.log(parseFloat('123.5'));

console.log(+'123.5abc2'); // NaN
console.log(parseInt('123.5abc2')); // целое число
console.log(parseFloat('123.5abc2')); //не целое число
