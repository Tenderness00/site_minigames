// Генератор случайных цветов

function randomColor() {

    const mainGames = document.querySelector(".mini-game");
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
    document.body.backgroundColor = "#" +
    randomColor
    console.log(randomColor)
    mainGames.style.background = randomColor;
}
