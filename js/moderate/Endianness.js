//require('os') ;
//console.log(os.endianness() == "BE" ? "BigEndian" : "LittleEndian") ; 


  var b = new ArrayBuffer(4);
var a = new Uint32Array(b);  

  var c = new Uint8Array(b);
  a[0] = 0xdeadbeef;
  if (c[0] == 0xef) console.log('LittleEndian');
  if (c[0] == 0xde) console.log( 'BigEndian' );