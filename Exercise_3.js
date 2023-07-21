// === Модуль E4 - Задание 3 ===
// Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObject() {
    return Object.create(null);
}

let result = createEmptyObject();
console.log(result);