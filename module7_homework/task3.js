/* Задание 3.  Написать функцию, которая создает пустой объект, но без прототипа */

//1вариант (через null)

function func() {
    let obj = Object.create (null);
    return obj;
}
console.log(func());  //ответ  [Object: null prototype] {}





//2вариант (через undefined)

let emptyFunction = function a() {
    return Object.create(undefined)
}
console.log(Object.getPrototypeOf(emptyFunction));   //ответ  просто {} - 

//мы обсуждали как-то, но я так и не понял - undefined, судя по всему тоже работает?

