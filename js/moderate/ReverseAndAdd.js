var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
       var cur = line
       var it = 0 ;
        var ok = false ; 
        while ( ok = isPalindrome(cur) == false && it <= 100 )
        {
            cur = Number(cur) + Number(String(cur).split("").reverse().join("")) ;           
            it++ ;    
        }
       
      if ( it < 100 )  console.log(it+" "+cur) ; 
       
        
        
       
     
    }
});

function isPalindrome(n)
{
    return n == String(n).split("").reverse().join("") ; 
    
}
