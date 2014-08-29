var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        line = line.split(" ").join("") ;
    //var all = line.split(" ") ;    
        var found = false;  
        
    for ( var i = 1 ; i <= 9 ; ++i )
    {
        var li = line.indexOf(i) ; 
        if ( li != -1 && li == line.lastIndexOf(i) ) 
        {
            console.log(li +1 ) ; 
            found =true ; 
            break; 
        }
        
    }
    
        if (! found ) console.log(0) ; 
        
    
}
});
