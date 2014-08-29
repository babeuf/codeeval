var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
        var o = 0 ;
        var l = line.trim().length  ;
        
        for ( var i = 0 ; i < l ; ++i  )
        {
            o += parseInt(line.charAt(i),10) ; 
        }
        
         console.log(o) ; 
      
    }
});