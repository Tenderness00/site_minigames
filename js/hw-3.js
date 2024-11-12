
// // // 1 задание

// for(let i = 0; i < 2; i = i + 1) {
//     console.log("Привет")
// }
// // 2 задание

// for(let i = 1; i <= 5; i = i + 1) {
//     console.log(i)
// }

// // 3 задание

// for(let i = 7; i <= 22; i = i + 1) {
//     console.log(i)
// }

// // // 4 задание

// const workers = {
//     "Коля": '200',
//     "Вася": '300',
//     "Петя": '400'
//  }

//  for (let name in workers) {
//     console.log(`${name} - ${workers[name]}`);
//  }

//  // 5 задание
// num = 0
// for(let n = 1000; n > 50; n = n / 2) {
//     console.log(n)
//     num = num + 1
// }
// console.log(`Кол-во делений:`, num)

// // 6 задание

// for(let fri = 3; fri <= 31; fri = fri + 7) {
//     console.log(`Сегодня пятница, ${fri}-е число. Необходимо подготовить отчет.`)
// }

// // 7 задание
// iterations = 0
// for(let k = 100; k > 0; k = k - 7) {
//     iterations = iterations + 1;
//     if (k - 7 <= 0) {
//         console.log(`Результат:`, k);
//     }
// }
// console.log(`Кол-во делений:`, iterations);

// // 8 задание

// months = {
//     "1": 'январь',
//     "2": 'февраль',
//     "3": 'март',
//     "4": 'апрель',
//     "5": 'май',
//     "6": 'июнь',
//     "7": 'июль',
//     "8": 'август',
//     "9": 'сентябрь',
//     "10": 'октябрь',
//     "11": 'ноябрь',
//     "12": 'декабрь'
// }

// for (let k = 1; k <=12; k = k + 1) {
//     console.log(`${k} - ${months[k]}`);
// }

// // 9 задание

// book = {
//     'title': 'Название книги',
//     'author': 'Автор книги',
//     'year': 'Год издания',
//     'genre': 'Жанр'
// }

// for (let key in book) {
//     console.log(book[key])
// }

// // 10 задание

// const numbers = [123, 4123, 412, 11, 44, 9999, 12846, 8, -23, 1000]
// console.log(Math.min(...numbers))