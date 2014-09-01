
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim().toLowerCase() ; 
    if (line != "") {
        
        var sum = 0 ;
        
        var o = new Object() ; 
        var valid = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ;
        var ll = line.length ;
        var i ; 
        
        for ( i = 0 ; i < line.length ; ++i ) 
        {
           var l = line.charAt(i); 
            if ( valid.indexOf(l) != -1 )
            {
                if ( !o[l] ) o[l] = 0 ;
                o[l] ++ ; 
            }
        }
        
        var t = [];
        for (var k in o) t.push([k, o[k]]);
        t.sort(function(a, b) { return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0 });
        
        var tl = t.length ; 
        var last = 26 ; 
        
        for ( i = 0 ; i < tl ; ++i )
        {
           sum += t[i][1] * last ;  
            last -- ;
            
            
        }
        console.log(sum) ; 
        
      
        
    }
});