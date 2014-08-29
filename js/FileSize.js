var fs = require("fs"); 
 var stats = fs.statSync(process.argv[2]) ;
 console.log( stats["size"] ) ;