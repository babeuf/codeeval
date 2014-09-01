var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
     
       var a = line.split(";") ; 
        var n = a[1].split(",") ; 
        var l = Number(a[0]) ; 
        
        var dic = new Array(l-1) ; 
        
        while(l--)
        {
            var num = n[l] ; 
            if ( dic[num] ) 
            { 
                console.log(num); 
                break ; 
            }
            else dic[num] = 1 ; 
        
        }
        
        
       
     
    }
});
