var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var o = JSON.parse(line) ;
        var items = o.menu.items ; 
        
        var l = items.length ; 
        var sum = 0 ; 
        
        for ( var i  = 0 ; i < l ; ++i )
        {
            var it = items[i] ; 
            if ( it && it.label && it.id ) sum += it.id ; 
        }
        
        
     console.log(sum) ;
         
        
    
}
});

function getD( p1, p2 ) 
{
    
    return  (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y) ;
}