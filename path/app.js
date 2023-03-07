const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

//dirname
console.log(path.dirname(__filename)); 


const parsed=path.parse(__filename);
console.log(parsed);

const str=path.format(parsed);
console.log(str);

//절대경로인지 상대경로인지 확인방법
console.log('isAbsolute?',path.isAbsolute(__dirname));
console.log('isAbsolute?',path.isAbsolute('../'))


//normalize  이상한경로면 알아서 수정
console.log(path.normalize('./folder/////////sub'));


//join
console.log(path.join(__dirname,'image'));