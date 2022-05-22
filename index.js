 function myEach(collection,callback){
   let newArr;
   if(Array.isArray(collection)){
       newArr = collection;
   }else {
       newArr = Object.values(collection);
   }
   
   for(let i =0;i< newArr.length;i++){
      callback(newArr[i])
  }
  return collection
 }

 
 
 function myMap(collection,callback){
    let newArr;
    if(Array.isArray(collection)){
        newArr = collection;
    }else {
        newArr = Object.values(collection);

    }
    const arr =[];
    
    for(let i =0;i< newArr.length;i++){
       let result = callback(newArr[i])
       arr.push(result);
   }
   return arr
  }

 
 
  function myReduce(collection,callback, acc){
    let newArr;
    if(Array.isArray(collection)){
        newArr = collection;
    }else {
        newArr = Object.values(collection);
    }

    if(acc===undefined){
        acc = newArr[0];
        for (let i = 1; i<newArr.length; i++){
            acc = callback(acc,newArr[i],collection);
        }
    }else {
        for(let i =0; i<newArr.length; i++){
            acc = callback(acc,newArr[i],collection);
        }
    }
  return acc
}

function myFind(collection,predicate){
    let newArr;
    if(Array.isArray(collection)){
        newArr = collection;
    }else {
        newArr = Object.values(collection);
    }
   for (let i =0; i<newArr.length; i++){
       if(predicate(newArr[i])===true){
        return newArr[i]
       }
       else {
           return undefined
       }

      

   }

   }




  