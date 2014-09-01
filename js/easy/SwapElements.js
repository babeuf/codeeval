
var fs  = require("fs");


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var all = line.split(" : "); 
        
        var swaps= all[1].split(", ") ; 
        var sl = swaps.length;  
        
        var items  = all[0].split(" ") ; 
        
        
        for ( var i = 0 ; i < sl ; ++i )
        {
        
        
    var bornes = swaps[i].split("-") ; 
    var b1 = bornes[0] ; 
    var b2 = bornes[1] ; 
        
       
    
        var tmp = items[b1] ; 
        items[b1] = items[b2] ;
        items[b2] = tmp ; 
        
        }
        console.log(items.join(" ")) ; 
        
}
});
