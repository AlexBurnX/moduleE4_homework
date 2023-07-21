// === Модуль E4 - Задание 5 ===
// Переписать консольное приложение из предыдущего юнита на классы.
//
// Общие требования:
// 1) Имена классов, свойств и методов должны быть информативными;
// 2) Соблюдать best practices;
// 3) Использовать синтаксис ES6.

class Device {
    constructor(name) {
        this.work = false;
        this.name = name;
    }
    electroConnect(value) {
        if (value) {
            this.work = true;
            console.log(`ON "${this.name}" - device is connect to rosette.`);
        } else {
            this.work = false;
            console.log(`OFF "${this.name}" - device is disconnect to rosette.`);
        }
    }
}

class DevicePropers extends Device {
    constructor(name, power, bright, color, work) {
        super(work);
        this.work = work;
        this.name = name;
        this.power = power;
        this.bright = bright;
        this.color = color;
    }
    getInfo() {
        console.group(`\nDevice "${this.name}" info:`);
        console.log(`• work = ${this.work}`);
        console.log(`• power = ${this.power} W`);
        console.log(`• bright = ${this.bright} Lm`);
        console.log(`• color = ${this.color}`);
        console.groupEnd();
    }
    calcSumPower() {
        let sum = 0;
        if (this.work) {
            return this.power;
        }
        return sum;
    }
}

const lamp = new DevicePropers('lamp', 10, 500, 'silver');
const phone = new DevicePropers('phone', 50, 1000, 'green');
const computer = new DevicePropers('computer', 200, 2500, 'black');

const arrayDevices = [lamp, phone, computer];

lamp.electroConnect(true);
phone.electroConnect(false);
computer.electroConnect(true);

let sumPower = 0;
for (let device of arrayDevices) {
    device.getInfo();
    sumPower += device.calcSumPower();
}

console.log(`\n=== Total electricity consumed: ${sumPower} W ===`);