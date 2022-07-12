// // For-loop
// for( let i = 0; i < 10; i++ ){
//     console.log(`Điểm danh có`,i + 1, `bạn`);
// }

// // While-loop
// let i = 100;
// while( i > 0 ){
//     console.log(i);
//     i++;
// }

// // Do-while-loop
// let x = 0;
// do{
//     console.log(x);
//     x++;
// }while( x < 10 );

// Tạo một biến có giá trị là 0. Hãy cộng cho biến đó các giá trị từ 30 đến 300.
// let a = 0;
// for(let i = 30; i <= 300; i++){
//     a += i;
// }
// console.log(a);

//- Tạo một biến có giá trị là 0. Hãy cộng cho biến đó các giá trị từ 1 đến 1000 nhưng giá đó phải là số chẵn.
let a = 0;
for(let i = 1; i<= 1000; i ++){
    if(i % 2 == 0){
        a += i;
    }
}
console.log(a);