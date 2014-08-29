var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var word=  line.split(" ") ;
       if ( word.length > 1 ) console.log( word[word.length-2]) ; 
           
      
        
    }
});