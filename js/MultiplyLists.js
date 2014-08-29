
var fs  = require("fs");


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var all = line.split(" | "); 
        
        var l1 = all[0].split(" ") ; 
        var l2 = all[1].split(" ") ; 
        l = l1.length; 
       var out = "" ; 
        for ( var i = 0 ; i < l ; ++i )
        {
            out += (l1[i] * l2[i]) + " " ; 
            
        }
        console.log(out.trimRight()) ; 
        
}
});
