
var fs  = require("fs");


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var all = line.split(","); 
        var words = new Array() ; 
        var digits=  new Array() ; 
        
        var l = all.length; 
        
        for ( var i = 0 ; i < l ; ++i )
        {
            var w = all[i] ; 
            
            if ( Number(w) == w ) digits.push(w) ; 
            else words.push(w) ; 
        }
        
        if ( words.length == 0 ) console.log( digits.join(",") )  ;
        else if ( digits.length == 0 ) console.log( words.join(",") )  ;
        else console.log( words.join(",") + "|" + digits.join(",")) ;
        
}
});
