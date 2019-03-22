const each = require('./each');
//const arr2 = require('./each');
const myFunc = require('./each');
let arr2 = [64, 49, 36, 25, 16];


test("Возврящаемый тип должен быть массив", () => {
	expect(Array.isArray(each(arr2, myFunc))).toEqual(true);	
});

test("Должна вернуть [ 8, 7, 6, 5, 4 ]", () => {
	//expect(each(arr2, myFunc)).toBe([ 8, 7, 6, 5, 4 ]);
	expect(each(arr2, myFunc)).toEqual([ 8, 7, 6, 5, 4 ]);	
});

test("Длина массива должна быть 5", () => {
	//expect(each(arr2, myFunc)).toBe([ 8, 7, 6, 5, 4 ]);
	expect(each(arr2, myFunc)).toHaveLength(5);	
});