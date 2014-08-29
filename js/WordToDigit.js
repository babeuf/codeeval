var words = ["zero","one","two","three","four","five","six","seven","eight","nine"] ; 

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
    var out = "";      
    var all = line.split(";") ; 
    var l = all.length; 
        
        for ( var i  = 0 ; i < l ; ++i ) 
        {
            out += words.indexOf( all[i] ) ; 
        }
        
        console.log(out) ; 
    
}
});
