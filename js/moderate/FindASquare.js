var p = new Object() ;

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
      var all = line.split(", ") ; 
        
        if( all.length != 4 ) 
        {
            console.log('false') ; 
        }
        else
        {
                
            var clean ; 
           
            clean = all[0].substr(1, all[0].length-2).split(",") ;   
            p.x1 = clean[0] ;  
            p.y1 = clean[1] ;
        
            clean = all[1].substr(1, all[1].length-2).split(",") ;   
            p.x2 = clean[0] ;  
            p.y2 = clean[1] ;

            clean = all[2].substr(1, all[2].length-2).split(",") ;   
            p.x3 = clean[0] ;  
            p.y3 = clean[1] ;
            
            clean = all[3].substr(1, all[3].length-2).split(",") ;   
            p.x4 = clean[0] ;  
            p.y4 = clean[1] ;
            
            
           
            var d2 = getD(p.x1,p.y1, p.x2, p.y2) ; 
            var d3 = getD(p.x1,p.y1, p.x3, p.y3) ; 
            var d4 = getD(p.x1,p.y1, p.x4, p.y4) ; 
            var t ;
            
            if ( d2 == 0 || d3 == 0 || d4 ==0 ) console.log('false') ; 
            else
            {
                t = d2 * 2 ;
                if ( d2 == d3 && t  == d4 && getD(p.x4,p.y4, p.x3, p.y3) == d2 || 
                d2 == d4 && t  == d3 && getD(p.x3,p.y3,p.x2,p.y2) == d2 || 
                d3 == d4 && d3 * 2  == d2 && getD(p.x2,p.y2, p.x3, p.y3) == d3 ) console.log('true'); 
                else console.log('false') ; 
            }
        
    }
}
});

function getD( x1, y1, x2, y2 ) 
{
    
    return  (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) ;
}