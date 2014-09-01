
var fs  = require("fs");

var lines =[] ; 
var cnt = 0 ;
var n ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        if ( cnt == 0 ) n = Number(line) ; 
        else lines.push(line) ;  
        
        cnt++ ;
}
});

lines.sort( function(a,b) {return b.length - a.length}) ; 

cnt--;  

for ( var i = 0 ; i < cnt ; ++i )
{
   console.log( lines[i] ) ; 
}

