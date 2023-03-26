//ЗАДАНИЕ 5 - Тоже самое, только через классы. Чуть решил выпендриться, сделать через prompt
let listDevices = 0;

class Device {
  constructor(name, room, voltage) {  
    this.name = name;
    this.room = room;
    this.voltage = voltage;
    this.status = function(onOff) {
        if (onOff === 'ДА') {
          listDevices += this.voltage
          console.log(name + ' in ' + room + ' voltage ' + voltage + 'W' + ' is ON')
        } else if (onOff === 'НЕТ') {
          console.log(name + ' in ' + room + ' voltage ' + voltage + 'W' + ' is OFF')
        } else {
          console.log('Введите ДА, если прибор включён или НЕТ, если прибор выключен');
        }
    };
  }
}

let laptop = new Device('Laptop', 'Bedroom', 80);
let TV = new Device('TV', 'Hall', 120);

let laptopStatus = prompt('Лампа сейчас включена?', 'Введите ДА или НЕТ');
let tvStatus = prompt('Телек сейчас включён?', 'Введите ДА или НЕТ');

laptop.status(laptopStatus);
TV.status(tvStatus);

console.log(`Общее потребление подключенных устройств на данный момент ${listDevices}W`);


/* долго тупил, как сделать так чтобы регистр "ДА/НЕТ" не учитывался.
Есть какой-то отдельный метод и тп? Чтоб без стопицот строчек кода?
Нашёл вот:
https://ru.stackoverflow.com/questions/805419/Как-сделать-что-бы-сравнение-не-было-чувствительно-к-регистру
пример:
String.prototype.sameText = function(str) {
  return this.toLowerCase() === str.toLowerCase();
}
  
var word = 'Привет';
console.log(word.sameText('ПрИвЕт'));)

Но так и не понял как это реализовать применительно к нашему заданию. Внутри класса или снаружи?
*/