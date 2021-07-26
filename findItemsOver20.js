function findItemsOver20(list){
  var Array1 = [];
  for(var i =0; i<list.length; i++){
    if(list[i].qty>20)
      Array1.push(list[i])
    }
    console.log(Array1);
    return Array1;
}

