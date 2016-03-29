function create_updated_collection(collection_a, object_b) {
  for(var i=0; i<object_b.value.length; i++)
  for(var j=0; j<collection_a.length; j++) {
      if(object_b.value[i] === collection_a[j].key){
          collection_a[j].count--;
      }
  }
  return collection_a;
}


