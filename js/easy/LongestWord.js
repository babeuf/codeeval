
var fs  = require("fs");


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var all = line.split(" ") ; 
        var l = all.length; 
    var w = "" ;
        var long = 0 ; 
        
        for ( var i = 0 ; i < l ; ++i )
        {
            if ( all[i].length > long )
            {
                 w = all[i] ; 
                long  = all[i].length; 
               
            }
        
        
        }
       
    console.log(w) ; 
}
});
