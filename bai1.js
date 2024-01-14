let num =+ parseInt(prompt("Nhập vào một số nguyên dương:"));
if (num > 0) {
    console.log("Các số nguyên dương từ 1 đến", num, "là:");
    let i = 1;
    while (i <= num) {
        console.log(i);
        i++;
    }
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}