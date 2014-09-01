var fs  = require("fs");
var cases = new Array() ; 
var wordsByLength = new Array() ; 
var endFound = false ; 

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    line = line.trim() ; 
    if (line != "") {
        
        if ( !endFound )
        {
            if ( line == "END OF INPUT" ) 
            {
                endFound = true ;
            }
            else
            {
                cases.push(line);  
            }                    
        }
        else
        {
            var len = line.length ;             
            if ( !wordsByLength[len]  ) wordsByLength[len]  = new Array() ; 
             wordsByLength[len].push(line) ; 
            
        }
    }
});


var cl = cases.length ; 
var i ; 

for ( i = 0 ; i < cl ; ++i ) 
{
    var word = cases[i] ; 
    var family = new Array() ; 
    family.push(word) ; 
//    console.log("SEARCHING : " + word ) ;
    findFriends( word, family ) ; 
//    console.log("FOUND : " + family.length ) ;
    console.log(family.length) ;
    
}



function findFriends( word, family )
{
    var wl = word.length ;
    
    // mettre les mots de longueur, wl, wl + 1, wl -1 
    if ( wordsByLength[wl] ) checkCandidatures( word, family, wordsByLength[wl] ) ; 
    if ( wl > 1  && wordsByLength[wl - 1] ) checkCandidatures( word, family, wordsByLength[wl -1] ) ; 
    if ( wordsByLength[wl +1] )  checkCandidatures( word, family, wordsByLength[wl + 1] ) ; 

}


function checkCandidatures( word, family, list )
{
    var l = list.length ; 
    
    
    for ( var i = 0 ; i < l ; ++i )
    {
        var w = list[i] ; 
        var s = word.substr(0,1) ; 
        var s2 = w.substr(0,1) ;
       
        
        if ( w.indexOf(s) <= 1  || word.indexOf(s2) <= 1 )
        {
             if ( lev(word,w)  == 1 )
             {
                  if ( family.indexOf(w) != -1 ) continue ;
                 family.push( w ) ; 
                // console.log("ADd : " + w + " for " + word)  ;
                findFriends(w, family) ; 
             }
           
        }
        
    }
    
}

function lev(a, b) {
    
    if ( a==b) return 0; 
    var al = a.length ;
    var bl = b.length ; 

    if(al == 0) return bl; 
    if(bl == 0) return al; 
    
    var pa = new Array(bl+1);
    var pb = new Array(bl+1)
    
    var i,j, c, d,e, tmp ;
    
    for ( i = 0 ; i <= bl ; ++i ) pa[i] = i ; 
    
    for ( i = 0 ; i < al ; ++i )
    {
        pb[0] = pa[0] +1 ; 
        
        for( j = 0 ; j < bl ; ++j )
        {
            c = pa[j] + ( (a[i] == b[j]) ? 0 : 1) ;
            d = pa[j + 1] + 1 ;            
            if (d < c ) c = d ;             
            e = pb[j] + 1 ; 
            if ( e < c ) c = e ; 
            
            pb[j +1 ] = c ; 
            
        }
        
        tmp = pa;
        pa = pb;
        pb = tmp;
        
        
    }
    
     return pa[bl] ; 
}