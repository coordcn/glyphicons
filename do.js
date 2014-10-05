var fs = require('fs');

fs.readFile('icons.txt', function(err, data){
  if(err) console.log(err);
  
  var str = data.toString().split('\r\n');
  var res = '';
  
  for(var i = 0, l = str.length; i < l; i += 3){
    var s1 = str[i].split(' ');
    var s2 = str[i + 1].split(' ');
    var s3 = str[i + 2];
    
    var ie6 = s1[0] + ' { *zoom: expression( this.runtimeStyle["zoom"] = "1",this.innerHTML = ' + s2[1] + ' ); }';
    var chrome = s1[0] + ':before { content: ' + s2[1] + '; }';
    var res = res + ie6 + '\r\n' + chrome + '\r\n\r\n';
  }
  
  fs.writeFile('i.txt', res, function(err){
    if(err) console.log(err);
  });
})