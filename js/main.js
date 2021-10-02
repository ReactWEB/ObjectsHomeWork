//Выше исходник массива. Нужно для каждого человека посчитать общий возраст семьи и вывести новый объект. Ниже пример с Лерой.

//familyAges.push({name: 'Lera', age:  22, familyAge: 433})

const arrPerson = [
  {name: 'Alex', age: 30, family: [
    {name: 'Vova', age: 29}, 
    {name: 'Vova', age: 20},
    {name: 'Vova', age: 30},
  ]}, 
  {name: 'Lera', age: 22, family: [
    {name: 'Vova', age: 23}, 
    {name: 'Vova', age: 11},
  ]},
  {name: 'Maks', age: 24, family: [
    {name: 'Vova', age: 23}, 
    {name: 'Vova', age: 34},
    {name: 'Vova', age: 21},
  ]}, 
  {name: 'Roma', age: 28, family: [
    {name: 'Vova', age: 45}, 
    {name: 'Vova', age: 35},
    {name: 'Vova', age: 45},
    {name: 'Vova', age: 15},
  ]}, 
];


let familyAge = 0;
const upAge = () => {
  for(let i = 0; i < arrPerson.length; i++){
    for(let k = 0; k < arrPerson[i].family.length; k++){
    familyAge += arrPerson[i].family[k].age;    
    }
    console.log(`name: ${arrPerson[i].name}, age: ${arrPerson[i].age}, familyAge: ${familyAge}`);
  }  
}

upAge();