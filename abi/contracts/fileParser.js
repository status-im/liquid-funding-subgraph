var fs = require('fs');

function removeLine(textblock){
  // break the textblock into an array of lines
  var lines = textblock.split('\n');
  // remove one line, starting at the first position
  lines.splice(0,1);
  // join the array back into a single string
  var newtext = lines.join('\n');
  return newtext
}

function printFirstLine(block){
  var lines = block.split('\n');
  console.log(lines[0])
}

fs.readFile('./LiquidPledging.json', 'utf8', function(err, contents) {
  //let cleansed = removeLine(contents)
  let parsed = JSON.parse(contents)
  console.log(parsed)
});
