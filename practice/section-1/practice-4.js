function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var array=[];
  /*for(var i = 0; i<  collection_a.length; i++)
    for(var j = 0; j<object_b.value.length; j++){
      if( collection_a[i].key === object_b.value[j]){
        array.push(collection_a[i].key);
      }
    }*/
  collection_a.forEach(function(element){
    if(isExist(element.key,object_b.value)){
      array.push(element.key);
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
