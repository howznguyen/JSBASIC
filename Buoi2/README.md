
# Bài 2:

## Câu điều kiện


### if
Cấu trúc:
```
if( <condition> ){
    // if condition is true
    <code>
}
```

Ví dụ:
```
let a = 5;
let b = 3;
if( a > b ){
    console.log("a lớn hơn b");
}
```


### else (optional)
Chỉ được sử dụng sau câu lệnh if

Cấu trúc:
```
if( <condition> ){
    // if condition is true
    <code>
}
else{
    // if condition is false
    <code>
}
```

Ví dụ:
```
let a = 5;
let b = 10;
if( a > b ){
    console.log("a lớn hơn b");
}else{
    console.log("a nhỏ hơn b");
}
```


### else if (optional)
Chỉ được sử dụng sau câu lệnh if và có thể trước câu lệnh else.

Cấu trúc:
```
if( <condition> ){
    // if condition is true
    <code>
}
else if( <condition2> ){
    // if condition2 is true
    <code>
}
else{
    // if condition is false and condition2 is false
    <code>
}
```

Ví dụ:
```
let a = 10;
let b = 10;
if( a > b ){
    console.log("a lớn hơn b");
}else if( a < b ){
    console.log("a nhỏ hơn b");
}else{
    console.log("a bằng b");
}
```

## Bài Tập Thực Hành:

1. Kiểm tra một số có phải là số chẵn hay không?
2. Kiểm tra một số có phải là số lẻ hay không?
3. Kiểm tra một số có chia hết cho 3 và 5 hay không?

## Bài Tập Về Nhà:

1. Tính phương trình bậc 1 với:
    + a,b là hệ số của phương trình
    + Nếu a == 0:
        - Nếu b==0 => Vô số nghiệm (hay vô định)
        - Nếu b!=0 => Vô nghiệm
    + Nếu a != 0:
        - Phương trình có nghiệm là x = -b/a

2. Kiểm tra năm này có phải năm nhuận hay không?
Biết:
    + Năm nhuận là năm chia hết cho 4 và không chia hết cho 100