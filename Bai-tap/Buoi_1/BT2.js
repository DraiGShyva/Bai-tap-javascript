var a = 5;
for (var i = 2; i < Math.sqrt(a); i++) {
    if (a % i == 0) {
        console.log("Không phải số nguyên tố");
        return 0;
    }
}
console.log("Là số nguyên tố");