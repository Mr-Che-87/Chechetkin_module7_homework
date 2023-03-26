/* Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false */

//1ВАРИАНТ

const Object = {
  name: 'Alex',
  age: 35,
  hobby: 'travel'
}

function foo (str, obj) {
  let a = false;
  for (let key in obj) {        
      if (str == key) {a = true}
  }
  return a
}

console.log (foo('age', Object)); 
console.log (foo('sfgfsdgsfgs', Object));  





//2ВАРИАНТ

const Object = {
    name: 'Alex',
    age: 35,
    hobby: 'travel'
}

function foo (str, obj) {
   return str in obj
}

console.log(foo('age', Object));
console.log (foo('sfgfsdgsfgs', Object)); 

//второй способ поприкольнее же да? т.к. без цикла, короче


