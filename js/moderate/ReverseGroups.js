var fs  = require("fs");var sortFunc = function(a,b) {return a-b } ; 

 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
      
       var all = line.split(";") ; 
        var k = Number(all[1]) ; 
     
        var list = all[0].split(",") ; 
        var l = list.length ; 
       
        
        if ( k > l ) console.log(list.join(",")) ; 
        else            
        { 
            var out = "" ; 
            
            for ( var i = 0 ; i < l ; i += k )
            {
                if ( i + k > l )
                {
                    out += list.slice(i,i+k).join(",") +","  ; 
                }
                else 
                {
                    for ( var j = k-1 ; j >= 0 ; --j )
                    {
                        out += list[i + j] + "," ;
                    }
                }
              
            }
            
            console.log(out.substr(0,out.length-1)) ;
        
        }
        
        
       
        
     
     
    }
});
