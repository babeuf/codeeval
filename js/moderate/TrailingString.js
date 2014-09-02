var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
      var all = line.split(",") ;
        
        var need = all[1] ; 
        var stack = all[0] ; 
        
        var sl = stack.lastIndexOf(need) ; 
        if ( sl != -1 )
        console.log( stack.length - sl == need.length ? 1 :0 ) ; 
        else console.log(0); 
        
       
     
    }
});
