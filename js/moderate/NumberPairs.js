var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
      
    line = line.trim() ; 
       
  var all = line.split(";") ; 
    var ns = all[0].split(",") ; 
    var nl = ns.length ; 
    var goal = Number(all[1]) ; 
    
    var i,j  ;
    var out = "" ; 
    
    for ( var i = 0 ; i < nl ; ++i )
    {
        var n1 = Number(ns[i]) ; 
        
     for ( var j = i+1 ; j< nl ; ++j)
    {
        
        var n2 = Number(ns[j]) ; 
        
        if ( n1 + n2 == goal ) 
        {
            out += n1 + "," + n2 + ";"
        }
        
            
    }
    
    }
    
    
    console.log(out != "" ? out.substr(0,out.length-1) : "NULL") ; 
    
    

});
