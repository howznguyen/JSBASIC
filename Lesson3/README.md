
# Bài 3:

## Kiến thức:

## Vòng lặp là gì?
- Vòng lặp được sử dụng để thực thi một đoạn code lặp đi lặp lại một số lần nhất định dựa trên giá trị trả về từ một điều kiện cho trước.

```
a = 1
a += 1 
a += 2 
a += 3 
...
a += 10000 
```

## Các dạng vòng lặp:

### Vòng lặp biết trước số lần lặp

#### for-loop
Cú pháp:
```
for( <init-statement>; <condition>; <increment-statement> ){
    // code to be executed
}
```
Trong đó: 
+ init-statement: Cú pháp khởi tạo biến
+ condition: Điều kiện để kiểm tra xem vòng lặp có phải kết thúc hay không ?
+ increment-statement: Cú pháp thay đổi giá trị của biến.


Ví dụ:
```
for( let i = 0; i < 10; i++ ){
    console.log(i);
}
```

### Vòng lặp không biết trước số lần lặp

#### while-loop

Cú pháp:
```
while( <condition> ){
    // code to be executed
}
```
Trong đó:
+ condition: Điều kiện để kiểm tra xem vòng lặp có phải kết thúc hay không ?

Ví dụ:
```
let i = 0;
while( i < 10 ){
    console.log(i);
    i++;
}
```

#### Do-while-loop
Cú pháp:
```
do{
    // code to be executed
}while( <condition> );
```
Trong đó:
+ condition: Điều kiện để kiểm tra xem vòng lặp có phải kết thúc hay không ?

Ví dụ:
```
let i = 0;
do{
    console.log(i);
    i++;
}while( i < 10 );
```

## Bài Tập

### Bài Tập Thực Hành:
- In 100 số từ 1 đến 100 lên màn hình.
- Tạo một biến có giá trị là 0. Hãy cộng cho biến đó các giá trị từ 30 đến 300.
- Tạo một biến có giá trị là 0. Hãy cộng cho biến đó các giá trị từ 1 đến 1000 nhưng giá đó phải là số chẵn.

### Bài Tập Về Nhà:
- Có một giá trị là 100000. Dùng vòng lặp để chia đôi nó đến khi nào nó nhỏ hơn 100.
- Tạo một giá trị là 1. Dùng vòng lặp để tăng giá trị này lên đến 100.
- In một dãy chữ số từ 1 đến 10000 theo thứ tự giảm dần.
- In một dãy số chẵn từ 1 đến 2000.