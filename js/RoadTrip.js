
var fs  = require("fs");
var lett = ["a","b","c","d","e","f","g","h","i","j"] ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
       var all = line.split(";") ; 
        all.pop() ;
        var l = all.length; 
        
        var d = [] ; 
        
        for ( var i =0; i < l ; ++i )
        {
            d.push( all[i].trim().split(",")[1] ) ;
        }
        
        d.sort( function(a,b) {return a-b ; }) ; 
        l = d.length ; 
        var travelled = 0 ; 
        var out = "" ; 
        for ( var j = 0 ; j < l ; ++j) 
        {
            var dist = d[j] - travelled ; 
            travelled += dist ; 
            out += dist + "," ;
        }
        console.log(out.substr(0,out.length-1) );
        
}
});
