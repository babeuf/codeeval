var fs  = require("fs");

var count = 0 ;
 var dots ; 
var abs = Math.abs ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
      
    line = line.trim() ; 
     if (line != "") {
         
       
        if ( count == 0 ) 
        {
            count = Number(line) ;
            dots = []; 
        }
        else
        {            
            
            count--  ; 
            dots[count] = line.split(" ") ; 
            
            if ( count == 0 )
            {
               parseList() ; 
               dots =[] ; 
            }
            
           
        }

     
    }
    
   });

function parseList()
{
    var l = dots.length ; 
    
    var l1 = l ; 
    var l2  ; 
    
    var p1 ; 
    var p2 ; 
    
    var b1, b2 ; 
    
    var min = 99999999 ; 
    // 127.6636
    
    
    while( l1--  )
    {
        p1 = dots[l1] ; 
        l2 = l1 ; 
        
        while ( l2-- )
        {
              p2 = dots[l2] ; 
           
                      
            var estd = Number(p2[0]) - Number(p1[0])  ;
            estd = estd * estd ;
            
            if ( estd <= min ) 
            {
                var tmp = Number(p2[1]) - Number(p1[1]) ; 
                estd += tmp * tmp ;
            
                if ( estd < min ) 
                {
                    min =estd ; 
                    b1 = p1 ;
                    b2 = p2 ; 
                }
              
            }
            
        }
        
      
        
    }
   
    var d = Math.sqrt(dst(b1,b2)) ; 
    
    console.log( (Math.round(d*10000)/10000).toFixed(4)) ; 

 
    
    
}

function dst( p1, p2)
{
    var xs = Number(p2[0])- Number(p1[0])  ;
    xs = xs * xs ;     
    var ys = Number(p2[1])- Number(p1[1])  ;
    ys = ys * ys ;  
    return xs + ys;  
}