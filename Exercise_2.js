// === Модуль E4 - Задание 2 ===
// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

const obj = {
    test1: 1,
    test2: 'text',
    test3: true
};

function checkPropertyInObject(name, obj) {
    return name in obj;
}

let result = checkPropertyInObject('test3', obj);
console.log(result);
