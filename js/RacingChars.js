
var fs  = require("fs");

var position = -1 ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        
        var lc = line.indexOf("C") ; 
        var lr = line.indexOf("_") ; 
        
        var nextPos ;
        var dir ; 
        
       if ( position == -1 ) 
       {
           position = nextPos = lc == -1 ? lr : lc ; 
          
       }
       else
       {
           if ( Math.abs( lc - position ) <= 1 ) 
           {
               nextPos = position + ( lc - position ) ; 
           }
           else  if ( Math.abs( lr - position ) <= 1 ) 
           {
              nextPos = position + ( lr - position ) ; 
           }
       }
        
        
        if ( nextPos == position )  dir = "|"; 
        else if ( nextPos == position -1 ) dir = "/" ; 
        else if ( nextPos == position +1 ) dir = "\\" ; 
        else dir ="" ; 
    
        if ( dir == "" )
        {
            console.log("INVALID TRACK") ; 
              return ;      
        }
        position = nextPos ; 
        
       console.log( line.substr(0,position) + dir + line.substr(position+1) ) ; 
        
        
        
      
       
        
}
});
