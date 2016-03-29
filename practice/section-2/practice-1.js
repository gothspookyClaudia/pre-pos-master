function count_same_elements(collection) {
  var array=[];
  for(var i=0; i<collection.length; i++){
    var count = 0;
    for(var j=i; j<collection.length; j++){
      if(collection[i] === collection[j]){
        count++;
      }
    }
    var obj={
      key: collection[i],
      count: count,
    };
    array.push(obj);
    i+=count-1;
  }
   return array;
}



