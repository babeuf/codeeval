var fs  = require("fs");
/*
var map = [] ; 
map[0.01] = 'PENNY' ;
map[0.05] = 'NICKEL' ;
map[0.1] = 'DIME' ;
map[0.25] = 'QUARTER' ;
map[0.5] = 'HALF DOLLAR' ;
map[1] = 'ONE' ;
map[2] = 'TWO' ;
map[5] = 'FIVE' ;
map[10] = 'TEN' ;
map[20] = 'TWENTY' ;
map[50] = 'FIFTY' ;
map[100] = 'HUNDRED' ;*/

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    
    line = line.trim() ; 
    if (line != "") {
        
        console.log(line) ; 
        
        var all = line.split(";") ; 
        var price = Number(all[0]) ; 
        var pay = Number(all[1]) ; 
        
        if ( pay < price ) console.log("ERROR") ; 
        else if ( pay == price ) console.log("ZERO") ; 
        else
        {
            var d = Math.floor( (pay - price ) * 100 )  ; 
            var out = "" ; 
            console.log(d/100) ;
            
            while ( d >= 10000 ) 
            {
                out += "HUNDRED," ; 
                d -= 10000 ;
            }
            
            while ( d >= 5000 )
            {
                out += "FIFTY," ;
                d -= 5000 ;
            } 
            
            
            while ( d >= 2000 )
            {
                out += "TWENTY," ; 
                d -= 2000 ; 
            }
            
            while ( d >= 1000 )
            {
                out += "TEN," ; 
                d -= 1000 ;
            } 
            while ( d >= 500 )
            {
                out += "FIVE," ; 
                d -= 500 ;
            }
            while ( d >= 200 )
            {
                out += "TWO," ; 
                d -= 200 ;
            } 
            while ( d >= 100 )
            {
                out += "ONE," ; 
                d -= 100 ;
            } 
            while ( d >= 50 )
            {
                out += "HALF DOLLAR," ; 
                d -= 50 ;
            } 
            while ( d >= 25 )
            {
                out += "QUARTER," ; 
                d -= 25 ;
            } 
            while ( d >= 10 )
            {
                out += "DIME," ; 
                d -= 10 ;
            }
            
             while ( d >= 5 )
            {
                out += "NICKEL," ; 
                d -= 5 ;
            } 
            
             while ( d >= 1 )
            {
                out += "PENNY," ; 
                d -= 1 ;
            } 
            
           
            console.log(out.substr(0,out.length-1));
            
            
        }
            
        
     
       
       
     
    }
    
});




31.85;68.15
36.3
TWENTY,TEN,FIVE,ONE,QUARTER,NICKEL


296.17;297
0.82
HALF DOLLAR,QUARTER,NICKEL,PENNY,PENNY



63;89.35
26.34
TWENTY,FIVE,ONE,QUARTER,NICKEL,PENNY,PENNY,PENNY,PENNY


270.58;359.58
89
FIFTY,TWENTY,TEN,FIVE,TWO,TWO

398.50;400.25
1.75
ONE,HALF DOLLAR,QUARTER

63.00;89.35
26.34
TWENTY,FIVE,ONE,QUARTER,NICKEL,PENNY,PENNY,PENNY,PENNY



166.73;257.27
90.54
FIFTY,TWENTY,TWENTY,HALF DOLLAR,PENNY,PENNY,PENNY,PENNY

