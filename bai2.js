let num =+ parseInt(prompt("Nhập vào một số nguyên dương:"));
if (num > 0) {
    let factorial = 1;
    let i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= num);

    console.log("Giai thừa của", num, "là:", factorial);
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}