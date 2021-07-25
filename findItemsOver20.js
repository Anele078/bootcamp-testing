function findItemsOver20(list){
    var Array1 = [];
    for(var i =0; i<list.length; i++){
      if(list[i].qty>20)
        Array1.push(list[i])
      }
      console.log(Array1);
      return Array1;
  }

  
  function findItemsOver(itemlist1,itemlist2){
    var Array1 = [];
    for(var i in itemlist1){
      if(itemlist1[i].qty > itemlist2)
         Array1.push(itemlist1[i])
      }
      console.log(Array1);
      return Array1;
  }
  