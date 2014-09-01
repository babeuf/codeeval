var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
        console.log( ( Number(line).toString(2)).split("0").join("").length) ; 
        
       
     
    }
});
