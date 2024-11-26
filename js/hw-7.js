// камень ножницы бумага

function rockPaperScissors() { 
    let options = ["камень", "ножницы", "бумага"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function gameComputer () {
    const player = prompt("Камень, ножницы, бумага, выбирайте!");
    const computer = rockPaperScissors();
    alert(`Ответ компьютера ${computer}`);
    const choice = {
        камень: "ножницы",
        ножницы: "бумага",
        бумага: "камень",
    }

    if (player === computer) {
        alert("Ничья!")
    } else if (choice[player] === computer){
        alert("Вы победили!");
    }
    else {
        alert("Победил компьютер!");
    }
}

// 1 задание (С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите результат в консоль.)

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

//  console.log(people.sort((a, b) => a.age - b.age));


// 2 задание

// function filter(array, ruleFunction) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (ruleFunction(array[i])) {
//             result.push(array[i]);
//         }  
//     }
//     return result;
//     }

// function isPositive(num) {
//     return num > 0;
// }
//     function isMale(person) {
//         return person.gender === 'male';
//         }
    
//     console.log(filter([3, -4, 1, 9], isPositive));
    
//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
//     console.log(filter(people, isMale));


// 3 задание (Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».)

//  const intervalId = setInterval(() => {
//     console.log(new Date());
//  }, 3000);

//  setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Время прошло');
//  }, 30000);


// 4 задание (Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска. Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду. Используйте setTimeout.)

// function delayForSecond(callback) {
//     setTimeout (callback, 1000);
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })


// 5 задание 

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if  (cb) {  cb(); }
//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Глеб'))