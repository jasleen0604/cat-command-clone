let fs=require('fs');

//npm install line-reader
let lineReader = require('line-reader');

function scommand(filepath)
{
    
    lineReader.eachLine(filepath, (line, last) => {
        if(line.length!=0)
        console.log(line);   
    });
    
}
module.exports={
    scommandfn: scommand
};