// === Модуль E4 - Задание 4 ===
// Реализовать следующее консольное приложение подобно примеру, который
// разбирался в видео. Реализуйте его на прототипах. Определить иерархию
// электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть как минимум два (например, лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.
//
// План:
// 1) Определить родительскую функцию с методами, которые включают/выключают
// прибор из розетки.
// 2) Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// 3) У каждого из приборов должны быть собственные свойства и желательно,
// методы, отличные от родительских методов.
// 4) Создать экземпляры каждого прибора.
// 5) Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

function Device(name) {
    this.work = false;
    this.name = name;
}

Device.prototype.electroConnectDevice = function(value) {
    if (value) {
        this.work = true;
        console.log(`ON "${this.name}" - device is connect to rosette.`);
    } else {
        this.work = false;
        console.log(`OFF "${this.name}" - device is disconnect to rosette.`);
    }
}

function DevicePropers(name, power, bright, color) {
    this.work = false;
    this.name = name;
    this.power = power;
    this.bright = bright;
    this.color = color;
}

DevicePropers.prototype = new Device();

DevicePropers.prototype.infoProp = function() {
    console.group(`\nDevice "${this.name}" info:`);
    console.log(`• work = ${this.work}`);
    console.log(`• power = ${this.power} W`);
    console.log(`• bright = ${this.bright} Lm`);
    console.log(`• color = ${this.color}`);
    console.groupEnd();
}

// Функция подсчёта потребляемой мощности всех подключенных приборов
const sumPower = function(){
    let sum = 0;
    for (let dev of arrayDevices) {
        if (dev.work) {
            sum += dev.power;
        } else {
            sum;
        }
    }
    return sum;
}

const lamp = new DevicePropers('lamp', 10, 500, 'silver');
const phone = new DevicePropers('phone', 50, 1000, 'green');
const computer = new DevicePropers('computer', 200, 2500, 'black');

// Метод подключения/отключения прибора к розетке
lamp.electroConnectDevice(true);
phone.electroConnectDevice(false);
computer.electroConnectDevice(true);

const arrayDevices = [lamp, phone, computer];
for (let dev of arrayDevices) {
    dev.infoProp();  // Метод для получения информации о всех свойствах прибора
}

// Вывод общей потребляемой мощности всех подключенных приборов
console.log(`\n=== Total electricity consumed: ${sumPower(arrayDevices)} W ===`);