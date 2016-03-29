function count_same_elements(collection) {
  var array=[];
  for(var i=0; i<collection.length; i++){
    var count = 0;
    var del = 0;
    for(var j=i; j<collection.length; j++){
      if(collection[i].slice(0,1) === collection[j].slice(0,1)){
        if(collection[j].length != 1){
          var num=parseInt(collection[j].replace(/[^0-9]/g,""));
          count+=num;
          del++;
        }
        else {
          count++;
          del++;
        }
      }
    }
    var obj={
      key: collection[i].slice(0,1),
      count: count,
    };
    array.push(obj);
    i+=del-1;
  }
  return array;
}
