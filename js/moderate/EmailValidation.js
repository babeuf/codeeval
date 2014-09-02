var fs  = require("fs");
  var pattern =  /^[a-z0-9\.\+\-]+@[\w\.-]+\.\w{2,4}/ig ;
var pattenRelou = /^[\"]{1}[^\"]+[\"]{1}@[\w\.-]+\.\w{2,4}/ig ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
      
    line = line.trim() ; 
       
 
 console.log(line.match(pattern) || ( line.charAt(0) == "\"" && line.match(pattenRelou)) ? "true" : "false") ; 
    
    

});



