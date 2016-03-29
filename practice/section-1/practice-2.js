function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var array=[];
  /*for(var i = 0; i<collection_a.length; i++)
    for(var j = 0; j<collection_b[0].length; j++){
      if(collection_a[i] === collection_b[0][j]){
        array.push(collection_a[i]);
      }
    }*/
  collection_a.forEach(function(element){
    if(isExist(element,collection_b[0])){
      array.push(element);
    }
  });
  return array;
}

function isExist(element,collection_b) {
  for (var j = 0; j < collection_b.length; j++) {
    if (element === collection_b[j]) {
      return true;
    }
  }
}
