
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
      var stack = line.split(" ") ; 
  
        
     //  var l =stack.length ; 
        
        var out = ""  ;
        
        while (stack.length > 0 )
        {
            out += stack.pop() + " " ; 
            stack.pop() ; 
        }
        
      
        
        
       console.log(out.trimRight()) ; 
}
});
