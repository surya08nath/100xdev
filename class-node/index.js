const fs=require("fs");
const {Command}= require('commander');
const program=new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of words')
    .argument('<file>','file to count')
    .action((file)=>{
        fs.readFile(file,'utf-8',function(err,data){
            if(err){
                console.log(err);
            }
            else{
                const words=data.split(" ").length;
                console.log(`There are ${words} words in ${file}`);
            }
        });
    });
program.parse(); 


// function main(filename){
//     fs.readFile(filename,"utf-8",function(err,data){
//         let total=0;
//         for (let i=0;i<data.length;i++){
//             if(data[i]===" "){
//                 total++;
//             }
//         }
//         console.log(total+1);
//     })
// }
// main("a.txt");