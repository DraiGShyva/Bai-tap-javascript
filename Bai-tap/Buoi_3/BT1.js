function checkSoChan(number) {
    return number % 2 === 0;
}

console.log(checkSoChan(11));

check = (number) => number % 2 === 0;

console.log(check(10));

//IN MẢNG
var sachs = [
    {
        tacgia: 'Harper Lee',
        tieuDe: 'To Kill a Mockingbird',
        namXuatBan: 2020,
        trangthai: true
    },
    {
        tacgia: 'Ray Bradbury',
        tieuDe: 'Fahrenheit 451',
        namXuatBan: 2022,
        trangthai: false
    }
]

for (i in sachs) {
    console.log(
        `Cuốn ${i}:
    Tác giả: ${sachs[i].tacgia}
    Tiêu đề: ${sachs[i].tieuDe}
    Năm xuất bản: ${sachs[i].namXuatBan}
    Trạng thái: ${sachs[i].trangthai ? 'còn' : 'hết'}`);
}

//MIN MAX
function minMax(arr) {
    let max = arr[0], min = arr[0];
    for (i in arr) {
        max = max < arr[i] ? arr[i] : max;
        min = min > arr[i] ? arr[i] : min;
    }
    console.log({ max, min });
}

minMax([2, 3, 4, 5]);

//Chữ dài nhất
function FindKeyLong(string) {
    let arr = string.split(" ");
    let max = arr[0];
    arr.forEach(element => {
        max = max.length < element.length ? element : max;
    });
    console.log(max);
}

FindKeyLong("Nguyen Phuc Hiep");