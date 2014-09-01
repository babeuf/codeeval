var tree = {} ; 
tree["8"] = tree["52"] = "30"; 
tree["3"] = tree["20"] = "8"; 
tree["10"] = tree["29"] = "20"; 


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var all = line.split(" ") ; 
        var t1 = all[0] ; var t2 = all[1] ; 
        
        var a1 = [] ; 
        
        var tmp = t1 ; 
       
        while ( tree[tmp] )
        {
            a1.push( tree[tmp] ) ;
            tmp = tree[tmp] ;
        }
        
        a1.push(t1) ; 
        
        tmp = t2 ;
        
        
        while ( tmp )
        {
            
            if ( a1.indexOf(tmp) != -1 )
            {
                console.log(tmp) ; 
                break ; 
            }
            tmp = tree[tmp] ;
        }
        
        
        
        
        
    }
});
