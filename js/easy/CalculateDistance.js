var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
      var all = line.substr(1,line.length-2).split(") (") ; 
        
              
            var clean ; 
            var p1 = new Object() ;
            var p2 = new Object() ;
           
            clean = all[0].split(", ") ;   
            p1.x = clean[0] ;  
            p1.y = clean[1] ;
        
            clean = all[1].split(", ") ;   
            p2.x = clean[0] ;  
            p2.y = clean[1] ;
      
            console.log(Math.sqrt(getD(p1,p2))); 
           
         
        
    
}
});

function getD( p1, p2 ) 
{
    
    return  (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y) ;
}