var board = new Array() ; 
var size = 256 ;
var i , j ; 
for ( i = 0 ; i < size ; ++i )
{
    board[i] = new Array() ; 
    
    for ( j = 0 ; j < size ; ++j )
    {        
        board[i][j] = 0 ;        
    }
}


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line)
                                                        {
    
    line = line.trim() ; 
    if (line != "") 
    {
        var all = line.split(" ") ; 
        switch( all[0] )
        {
        case "SetCol" : setCol( all[1], all[2] ) ; break ; 
        case "SetRow" : setRow( all[1], all[2] ) ; break ; 
        case "QueryCol" : queryCol( all[1] ) ; break ; 
        case "QueryRow" : queryRow( all[1] ) ; break ; 
        }
        
        
       
        
      
        
    }
});

function setCol( col, val )
{
    if ( col >= 0 && col < size )
    {
        for ( var i = 0 ; i < size ; ++i )
        {
           board[i][col] = val ; 
        }
    }
    
}


function queryCol( col )
{
    if ( col >= 0 && col < size )
    {
        var sum = 0 ;
        for ( var i = 0 ; i < size ; ++i )
        {
          sum += Number(board[i][col]) ; 
        }
        
        console.log(sum) ; 
        
        
    }
}

function setRow( row, val )
{
     if ( row >= 0 && row < size )
    {
        
         for ( var i = 0 ; i < size ; ++i )
        {
           board[row][i] = val ; 
        }
        
        
        
    }
}

function queryRow( row )
{
      if ( row >= 0 && row < size )
    {
        
         var sum = 0 ;
        for ( var i = 0 ; i < size ; ++i )
        {
          sum += Number(board[row][i]) ; 
        }
        
        console.log(sum) ; 
        
        
        
    }
}