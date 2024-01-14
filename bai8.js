let num =+ parseInt(prompt("Nhập vào một số nguyên dương:"));
if (num > 1) {
    console.log("Các số nguyên tố nhỏ hơn", num, "là:");
    let i = 2;
    while (i < num) {
        let isPrime = true;
        let j = 2;
        while (j <= Math.sqrt(i)) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
            j++;
        }
        if (isPrime) {
            console.log(i);
        }
        i++;
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương lớn hơn 1.");
}