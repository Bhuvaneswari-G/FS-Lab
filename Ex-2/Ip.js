var os = require( 'os' );
var networkInterfaces = os.networkInterfaces();
var arr = networkInterfaces['en1']
console.log(arr[1].address)
