// 1 задание 

// const numbers = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i] === 10) {
//         break;
//     }
// }

// 2 задание 

// const numb = [1, 5, 4, 10, 0, 3]
// for (let i = 0; i < numb.length; i++) {
//     if (numb[i] === 4) {
//         console.log(i);
//         break
//     } 
// }

// 3 задание
 
// const number = [1, 3, 5, 10, 20]
// console.log(number.join(' '));


// // 4 задание

//   const arr = []

//   for (let i = 0; i < 3; i++) {
//     const arr2 = [];
//     for (let i = 0; i < 3; i++) {
//         arr2.push(1);
//     }
//     arr.push(arr2)
    
//   }
//   console.log(arr);


  // 5 задание
  
//   const numb = [1, 1, 1]
//   numb.push(2, 2, 2);
//   console.log(numb);


  // 6 задание

//   const number = [9, 8, 7, 'a', 6, 5];
//   number.soft();
//   console.log(number);


// // 7 задание

    // const arr = [9, 8, 7, 6, 5];
    // const userNumber = +prompt('Введите число');
    // if (arr.includes(userNumber)) {
    //     alert('Угадал');
    // } else {
    //     alert('не угадал');
    // }


    // 8 задание

    //  let string = 'abcdef';
    //  string = string.split('');
    //  console.log(string);
    //  string.reverse();
    //  string = string.join('');
    //  console.log(string);


 // 9 задание

//  const meaning = [[1, 2, 3], [4, 5, 6]];
//  const newMeaning = [];
//  for (let i = 0; i < meaning.length; i++) {
//     newMeaning.push(...meaning[i]);
//  }
//  console.log(newMeaning);


 // 10 задание

//  const mean = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  for (let i = 0; i < mean.length; i++) {
//     if (mean[i + 1]) {
//         console.log(mean[i] + mean[i+1]);
//     }
//  }


  // 11 задание

//   function square(array){
//     return array.map(item => item **2);
//   }

// console.log(square([1, 2, 3]));


  // 12 задание

// function getLength(array) {
//     return array.map(item => item.length);
// }
// console.log(getLength(['omg', 'wow']));


  // 13 задание

//   function numbers(array) {
//     return array.filter(item => item < 0);
//   }
//   console.log(numbers([1, 2, 3, 4, -5, 6, -7, 8, 9, 10]));


  // 14 задание

//    function randomNumb() {
//     return Math.floor(Math.random() * 10);
//    }

//    const arr = [];

//    for (let i = 0; i < 10; i++) {
//     arr.push(randomNumb());
//    }

//    const evenArr = [];

//    for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 ===0) {
//         evenArr.push(arr[i]);
//     }
//    }

//    console.log(evenArr);


  // 15 задание

//   function randomNumb() {
//     return Math.floor(Math.random() * 10);
//    }

//    const arr = [];

//    for (let i = 0; i < 10; i++) {
//     arr.push(randomNumb());
//    }

//    console.log(arr);
//    console.log(arr.reduce((a, b) => a+b) / arr.length);


// game

function simpleArithmetic() {
    let simpleArithmetic = {
    '5 + 3': '8',
    '10 - 2': '8',
    '4 * 7': '28',
    '20 / 4': '5'
    }

    for (let key in simpleArithmetic) {
        if (prompt(`${key}`) === simpleArithmetic[key]) {
          alert('Правильный ответ')
        } else {
          alert('Не правильный ответ')
        }
      }
}
