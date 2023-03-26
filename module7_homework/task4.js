//ЗАДАНИЕ 4
//ВАРИАНТ СЛОЖНЫЙ (с циклом и new Map()


let listDevices = new Map();
function Device (name, room, voltage) {
  this.name = name,
  this.room = room,
  this.voltage = voltage,
  this.status = function(onOff) {
        if (onOff === true) {
        listDevices[this.name] = this.voltage
      console.log(name + ' in ' + room + ' voltage ' + voltage + 'W' + ' is ON')
    } else {
            console.log(name + ' in ' + room + ' voltage ' + voltage + 'W' + ' is OFF')
    }
  }
}

function calcPowerSum() {
  let sum = 0;
  for(item in listDevices){
    sum += listDevices[item]
  }
  console.log(`Общее потребление подключенных устройств на данный момент ${sum}W`);
}


let laptop = new Device('Laptop', 'Bedroom', 80);
let TV = new Device('TV', 'Hall', 120);

laptop.status(true);
TV.status(false);
calcPowerSum();
*/




//вариант простой - где listDevices - просто переменная, а не асс. массив (и цикл не понадобился)
let listDevices = 0;
function Device (name, room, voltage) {
  this.name = name,
  this.room = room,
  this.voltage = voltage,
  this.status = function(onOff) {
        if (onOff === 'ON') {
        listDevices += this.voltage
      console.log(name + ' in ' + room + ' voltage ' + voltage + 'W' + ' is ON')
    } else if (onOff === 'OFF') {
            console.log(name + ' in ' + room + ' voltage ' + voltage + 'W' + ' is OFF')
    } else {
      console.log('Введите ON, если прибор включён или OFF, если прибор выключен');
    }
  }
}


let laptop = new Device('Laptop', 'Bedroom', 80);
let TV = new Device('TV', 'Hall', 120);

laptop.status('ON');
TV.status('OFF');
console.log(`Общее потребление подключенных устройств на данный момент ${listDevices}W`);

