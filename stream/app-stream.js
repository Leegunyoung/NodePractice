const fs=require('fs');
const data=[];

fs.createReadStream('./file.txt',{
    // highWaterMark: 8, // 한번에 얼마나 읽어들일수 있는지를 알려주는거 
    // encoding:'utf-8', 
}).on('data',(chunk) => {
    data.push(chunk);
    //console.log(chunk);
}).on('end',()=>{
    console.log(data.join(''));
}).on('error',error=>{
    console.log(error);
})