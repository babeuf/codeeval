var fs  = require("fs");var sortFunc = function(a,b) {return a-b } ; 

  var ra = {}  ;
 var rb = {} ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
      
       var all = line.split(",") ; 
        var i ; 
        
      
        
        ra.lx = Number(all[0]) ; 
        ra.ly = Number(all[1]) ; 
        ra.hx = Number(all[2])  ; 
        ra.hy = Number(all[3]) ; 
        
        rb.lx = Number(all[4]) ; 
        rb.ly = Number(all[5]) ; 
        rb.hx = Number(all[6])  ; 
        rb.hy = Number(all[7]) ; 
        
        console.log( ra) ;
        console.log(rb) ;
        
        var maxl = rb.lx > ra.lx ? rb.lx : ra.lx ; 
        var minr = rb.hx > ra.hx ? ra.hx : rb.hx ; 
        
        if ( maxl <= minr )
        {
            var maxb = ra.hy < rb.hy ? rb.hy : ra.hy ; 
            var mint = ra.ly < rb.ly ? ra.ly : rb.ly ; 
            
            if (  maxb < mint )
            {
                console.log("True") ; 
            }
            else console.log("False") ; 
        }
        else console.log("False") ; 
        
     
     
    }
});
