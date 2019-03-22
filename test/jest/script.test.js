//import { sum } from './script';
const sum = require('./script');
//const num = require('./script');

test("Функция sum должна возвращать тип данных true.", () => {
	expect(sum(2,2)).toBeTruthy();
});


// test("Переменная num должна быть равна 5", () => {
// 	expect(num).toBe(5);
// });


// const each = require('./script');
// test("Переменная num должна быть равна 5", () => {
// 	expect(each(arr2, myFunc)).toBe([ 8, 7, 6, 5, 4 ]);
// });