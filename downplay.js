Downplay = (function(data){
  this.key = {};
  this.positions = {};
  var regex = {
    keys : /[A-z] = (.)+/g,
    tiles: /.{3}/g,
    elements: /./g,
  }
  var keys_raw = data.match(regex.keys);
  data = data
    .replace(regex.keys,"")
    .split('\n')
    .splice(keys_raw.length+1);

  for(index in keys_raw){
    keyRaw = keys_raw[index];
    this.key[keyRaw[0]] = keyRaw.slice(4);
  }
  var x, y, tileRow, types, typeK, type;
  //for each line of level text
  for(y in data){
    tileRow = data[y].match(regex.tiles);
    //for each tile in a row of tiles
    for(x in tileRow){
      types = tileRow[x].match(regex.elements);
      //for each element in a single tile space
      for(typeI in types){
        type = types[typeI];
        if(!/\s/g.test(type)){
          this.positions[type] = this.positions[type] || [];
          //store the position of the element
          this.positions[type].push({x:x*1,y:y*1});
        }
      }
    }
  }
})