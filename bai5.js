let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessedCorrectly = false;
while (!guessedCorrectly) {
    let userGuess = parseInt(prompt("Nhập vào một số từ 1 đến 10:"));
    if (userGuess > randomNumber) {
        console.log("Lớn hơn! Hãy thử lại.");
    } else if (userGuess < randomNumber) {
        console.log("Nhỏ hơn! Hãy thử lại.");
    } else {
        console.log("Chính xác! Bạn đã đoán đúng.");
        guessedCorrectly = true;
    }
}