const sum = require('./sum');


test("Функция sum должна возвращать тип данных true.", () => {
	expect(sum(2,2)).toBeTruthy();
});
