var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
      var all = line.split(" ") ; 
   
    var cycle = [] ; 
        var l =all.length ; 
        
        while ( l-- ) 
        {
            var c = all[l] ; 
            if ( cycle.indexOf(c) == -1 )
            {
                cycle.unshift(c) ; 
            }
            else break ; 
           
        }
        
            
        
        
       console.log(cycle.join(" ")) ; 
}
});
