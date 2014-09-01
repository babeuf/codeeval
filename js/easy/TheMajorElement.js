
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
       var all = line.split(",") ; 
        var l = all.length -1 ;
        
        
       // var best = "" ; 
        //var max =0 ;
        // var cnt = 0 ; 
       //all.sort( function(a,b) {return a-b }) ; 
        
        var map = new Object() ;
        
        for ( var i = l - 1 ; i >=0 ; --i )
        {
           var search = all[i] ; 
            
            if ( !map[search]) map[search] = 1 ; 
            else map[search] ++  ;
            /*
            if ( cnt == 0 || search == current )
            {
                cnt++ ; 
                current = search ; 
            }
            else
            {
                if ( cnt > max )
                {
                    max = cnt ; 
                    best = current; 
                   
                }
                
               cnt = 1 ; 
               current = search ; 
            }
            
           */
            
            
            
        }
        
        
        
        
        var t = [];

        for (var key in map) t.push([key, map[key]]);

        t.sort(function(a, b) { return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0 });

   
        console.log(t[0][1] > l/2 ? t[0][0] : "None") ; }
        

});
