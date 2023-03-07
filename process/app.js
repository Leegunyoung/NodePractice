const process=require('process')

console.log(process.cwd());

console.log(process.cpuUsage());


setTimeout(()=>{
    console.log('setTimeout');
},0)

process.nextTick(() => {                             //callback함수 일다끝나고 호출해줘!
    console.log('nextTick');
})

for(let i=0;i<100000;i++){
    console.log('looping');
}