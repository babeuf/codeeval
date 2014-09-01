
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var seq = line.split(" ") ; 
        
        var bin =""  ; 
        
        while ( seq.length > 0 )
        {
            var flag = seq.shift() ; 
            var op = seq.shift() ; 
            var t = flag == "00" ? "1" : "0" ; 
            
            bin += op.split("0").join(t) ; 
            
            
            
        }
        
        console.log(parseInt(bin,2)) ;
       
        
        
}
});