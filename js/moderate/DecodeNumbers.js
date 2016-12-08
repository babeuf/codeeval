var fs  = require("fs");var sortFunc = function(a,b) {return a-b } ; 

 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
      
        var all = line.split("") ;               
        var answers = []; 
        findSplit("",all,answers) ;  
        
        
        /*
         ABORT !
         if ( l > 1 ) 
         {
        
            for ( var i = 0 ; i < l ; ++i )
            {
            
                var c = all[i] ; 

                if ( i < l -1 )
                {
                    var next = Number(all[i+1]) ; 
               
                    if (  c == "1" ) 
                    {
                       chain++ ; 
                      

                    }
                    else if ( c == "2" && next <= 6 )
                    {
                        chain++ ;
                       
                    }
                    else
                    {
                        chain = 0 ;
                    }
      


                }
               

            }
            
             cnt += Math.pow(2,chain-1);
            cnt++ ;
         }*/
               
        console.log(answers.length) ; 
 
        
       
        
     
     
    }
});

function findSplit( start, input, answers )
{
    var l = input.length ; 
    
    for ( var i = 0 ; i < l ; ++i )
    {

        var c = Number(input[i]) ; 
        var next = i < l -1 ?  Number(input[i+1]) : null ; 
                     
        if (next && ( c == 1 || c == 2 && next <= 6) )
        {
         
            var s2 = start +  c+ "" + next+" "; 
            var cut= input.slice(i+2) ;   
           findSplit(s2,cut,answers) ; 
            
        }
        
         start += c + " " ; 
        
    
     
    }
    answers.push(start.trimRight()) ; 
}

/*
12     2
123    3
1219   5
1319   4
1111   5
1718   4
2222   5
145    2
*/

