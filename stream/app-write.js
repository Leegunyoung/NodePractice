const fs=require('fs');

const writeStream=fs.createWriteStream('./file3.txt');
writeStream.on('finish',()=>{
    console.log('finished!');
});
writeStream.write('Hello!');
writeStream.write('I`m');
writeStream.write('sunneng');
writeStream.end()