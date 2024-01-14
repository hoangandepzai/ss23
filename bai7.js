let num =+ parseInt(prompt("Nhập vào một số:"));
if (num > 0) {
    let sum = 0;
    let i = 1;
    do {
        if (num % i === 0) {
            sum += i;
        }
        i++;
    } while (i <= num / 2);
    if (sum === num) {
        console.log(num + " là số hoàn hảo.");
    } else {
        console.log(num + " không là số hoàn hảo.");
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}