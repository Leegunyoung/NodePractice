const fs=require('fs');

//3
//rename(...., callback(error,data))                     ->비동기식(콜백함수 사용하기)
//try{renameSync(....)} catch(e){ }                      ->동기식
//promises.rename().then().catch(0)                      ->promise형태로 사용이 가능

try{
fs.renameSync('./text.txt','./text-new.txt');
}catch(error){
    console.error(error);
}


fs.rename('./text-new.txt','./text.txt',(error) => {
    console.log(error);
})                           //비동기적 즉 async를 사용할떄는 무조건 callback함수가 있어야한다 동기적일떄는 없어도 디므로 try catch로 대체한다.     
console.log('hello');


fs.promises
.rename('./text2.txt','./text-new.txt')
.then(()=>console.log('Done!'))
.catch(console.error);

