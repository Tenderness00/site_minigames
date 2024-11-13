
function guessTheNumber(number) {

    let secret = number

    while (true) {
        let num = Number(prompt('Угадайте число от 1 до 100'))
        if (num === secret) {
            alert(`Вы угадали!`);
            break;
        } else if (num > secret) {
            alert(`Ваш ответ больше загаданного числа, попробуйте еще раз!`)
        } else if (num < secret) {
            alert(`Ваш ответ меньше загаданного числа, попробуйте еще раз!`)
        } else {
            alert(`Похоже Вы ввели что-то не то`)
        }
    }
}

guessTheNumber(77);
 