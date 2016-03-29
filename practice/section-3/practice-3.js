function create_updated_collection(collection_a, object_b) {
  var collection_c=[];
  for(var i=0; i<collection_a.length; i++){
    var count = 0;
    for(var j=i; j<collection_a.length; j++){
      if(collection_a[i] === collection_a[j]){
        count++;
      }
    }
    var obj={
      key: collection_a[i],
      count: count,
    };
    collection_c.push(obj);
    i+=count-1;
  }
  for(var i=0; i<object_b.value.length; i++)
    for(var j=0; j<collection_c.length; j++) {
      if(object_b.value[i] === collection_c[j].key){
        if(collection_c[j].count>=3){
          var num = Math.floor(collection_c[j].count/3);
          collection_c[j].count=collection_c[j].count-num;
        }
      }
    }
  return collection_c;
}
