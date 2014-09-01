var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var word=  line.split(" ") ;
        var output = "" ; 
        
        var wl = word.length ;
        
        for ( var i = 0 ;  i < wl ; ++i )
        {
            var w = word[i] ; 
            output += w.substr(0,1).toUpperCase() + w.substr(1) + " ";
        }
           
      console.log(output.trimRight()) ;
        
    }
});