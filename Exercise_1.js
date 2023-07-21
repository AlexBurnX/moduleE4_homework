// === Модуль E4 - Задание 1 ===
// Написать функцию, которая принимает в качестве аргумента объект и
// выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const obj = {
    test1: 1,
    test2: 'text',
    test3: true
};

function getKeysAndValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key} - ${obj[key]}`);
        }
    }
}

getKeysAndValues(obj);