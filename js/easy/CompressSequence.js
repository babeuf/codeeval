
var fs  = require("fs");
var lett = ["a","b","c","d","e","f","g","h","i","j"] ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
       var all = line.split(" ") ; 
        
       var l = all.length ; 
        
        var last = ""; 
        var cnt = 1 ;
        var out = "" ;
        
        for ( var i = 0 ; i < l ; ++i )
        {
            if ( all[i] == last ) cnt++ ; 
            else
            {
               if ( last != "" ) out += cnt + " " + last + " "; 
                cnt = 1 ; 
                last = all[i] ; 
            }  
            
        }
        
         out += cnt + " " + last + " "; 
        
        console.log(out.trimRight()) ;
       
        
}
});
