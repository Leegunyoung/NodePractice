//Fixed-size 메모리 덩어리
const buf=Buffer.from('Hi');
console.log(buf);             //unicode 형태
console.log(buf.length);
console.log(buf[0]);         //asciiz 형태
console.log(buf[1]);
console.log(buf.toString());

//create
const buf2=Buffer.alloc(2);                   //메모리 덩어리 찾아서 덩어리 초기화 시켜준다
const buf3=Buffer.allocUnsafe(2);

console.log(buf2);
console.log(buf3);

//concat  ->여러가지 있던 buffer들을 한곳에 무어둔다
