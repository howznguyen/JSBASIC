// Bài Trước: Biến, Kiểu Dữ Liệu, Phép Tính, Phép So Sánh.

// Bài 2:

// Đối với số

// +=, -=, *=, /=, %= 
// ví dụ:
// x += 10;
// x = x + 5;

// ++, --
// ví dụ:
// x = 10;
// x++; // x = x + 1;
// x--; // x = x - 1;
// lưu ý:
// ++x;
// --x;


// TH 1:
// let x = 10;
// let z = x++;
// bước 1: lưu giá trị của x vào z (10)
// bước 2: tự tăng x lên 1 (11)

// TH 2:
// let x = 10;
// let z = ++x;
// bước 1: tự tăng x lên 1 (11)
// bước 2: lưu giá trị của x vào z (11)

// Đối với chuỗi
// + (nối chuỗi)
// ví dụ:
// let chuoi1 = "Hello";
// let chuoi2 = " World";
// let chuoi3 = chuoi1 + chuoi2;
// console.log(chuoi3);


// So sánh (Câu lệnh điều kiện)
// Format:
// if (Điều Kiện) {
//     Câu Lệnh;
// }

let a = 10;
let b = 10;
if( a > b ){
    console.log("a lớn hơn b");
}else if( a < b ){
    console.log("a nhỏ hơn b");
}else{
    console.log("a bằng b");
}