
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        var all = line.split(";") ; 
        
      var words = all[0].split(" "); 
      var pos = all[1].split(" ") ;
        var pl = pos.length; 
        var wl = words.length; 
        
        var list = [] ; 
        for ( var j = 0 ; j < wl ; ++j )
        {
            var tmp =  words[j] ; 
            while( list[tmp] ) 
            {
                tmp =  tmp + "[CLONE]" ; 
                words[j] = tmp ; 
            }
            
            list[tmp] = 1 ; 
            
        }
        
        
        var clone = words.slice() ; 
        
        for ( var i = 0 ; i < pl ; ++i )
        {
           moveItem( clone, words, i, pos[i]-1 ) ; 
           
        }
        
        console.log(words.join(" ").split("[CLONE]").join("")) ; 
      
       
        
}
});

function moveItem( clone, words, i, j)
{
     var w = clone[i];    
    var index = words.indexOf(w) ;     
    var tmp = words[index] ; 
    words[index] = words[j] ; 
    words[j] = tmp; 
   //words.splice(words.indexOf(w),1) ; 
    //words.splice(j,0,w) ; 
    
}