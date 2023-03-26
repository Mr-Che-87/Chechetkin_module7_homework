/*Задание 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение */

//Подглядел вот такой способ в слаке: 
const protoObject = {
    company: "Facebook",
    office: "New-York",
    salary: 1000
  }
 
const personObject = Object.create(protoObject);
  personObject.bornCity = "Moscow";
  personObject.age = 35;
  
const ownProperty = function(arg) {
    for (let key in arg) {
      if (arg.hasOwnProperty(key)) {
        console.log(key + ": " + arg[key]);
      }
    }
  }
  
ownProperty(personObject);


//Вопрос: зачем так сложно, если можно проще:

const protoObject = {
    company: "Facebook",
    office: "New-York",
    salary: 1000
  }
  
  const personObject = Object.create(protoObject);
  personObject.bornCity = "Moscow";
  personObject.age = 35;
  
  const ownProperty = function(arg) {
      console.log(arg); 
  }
  
  ownProperty(personObject);
// или это неправильно?

  