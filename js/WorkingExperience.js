
var fs  = require("fs");
var m = ["Jan","Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" , "Oct", "Nov", "Dec" ] ;


fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        
        var all = line.split("; ") ; 
        var l = all.length ; 
        var tmp ;
        
        var total = 0 ;        
        var ranges = [] ; 
        
        var i,j ;
        
        for ( var i = 0 ; i < l ; ++i )
        {
            var range = new Object() ;
            
            var period = all[i].split("-") ;
            tmp = period[0] ; 
            var begin = new Date(tmp.substr(4,4), m.indexOf( tmp.substr(0,3))) ;             
            tmp = period[1] ; 
            var end = new Date(tmp.substr(4,4), m.indexOf( tmp.substr(0,3))+1,0) ;   
            range.begin = begin.getTime() ; 
            range.end = end.getTime() ; 
            ranges.push(range) ; 
        }
        
        var rl = ranges.length;  
        
        var b1, b2, e1, e2 ;
        var s ;
        
        for (i = 0; i < rl ; ++i) 
        {
            b2 = ranges[i].begin ; 
            e2 = ranges[i].end ;    
            s = e2 - b2 ; 
            overlap = 0 ; 
            
            for (j = 0 ; j < i; ++j) 
            {
                b1 = ranges[j].begin ; 
                e1 = ranges[j].end ;         
                var overlap = getOverlap(  b1, e1, b2, e2 ) ;
            //        console.log(overlap) ;
            }
            console.log(s) ; 
            s -= overlap ; 
            if ( s < 0 ) s = 0 ; 
        }
        
        total += s ; 
        
         
        
            console.log(Math.round(total/31556952000)) ;    
        
      
       
        
}
});

function getOverlap(b1, e1, b2, e2) 
{    
    console.log(b1,e1,b2,e2,e1-b2) ; 
    
    
    if ( b2 >= b1 && e2 <= e1 ) return e2 - b2; 
    if ( b1 >= b2 && e1 <= e2 ) return ( e2 - b2 )- ( e1 - b1) ; 
    if ( b1 >= b2 && e2 <= e1 ) return e2 - b1  ; 
    if (  b2 >= b1 && e1 <= e2 ) return e1 - b2  ; 
    
//    if (begin1 <= begin2 && begin2 <= end1) return true; // b starts in a
//    if (begin1 <= end2   && end2   <= end1) return true; // b ends in a
//    if (begin2 <  begin1 && end1   <  end2) return true; // a in b
    
    
    
    
    return 0;
}

