export const checkOddNumber = (numberArrays) =>{
  let arrayOfNumbers = numberArrays;

  let sortedArray = arrayOfNumbers.sort((a,b)=>a-b);
  let unknownNumber = 1;
  let numberToReturn = null;
  
  for(let i = 0; i < sortedArray.length; i++){
    let number = arrayOfNumbers[i];
    if(number % 2 !== 0){
        let index =  sortedArray.indexOf(unknownNumber);
        if(index === -1){
          if(unknownNumber < number){
            if(number > 0){
              numberToReturn = number;
              break;
            }
          }else
            {
              unknownNumber = unknownNumeber + 2;
              continue;
           }
       }
    }
  }
  return numberToReturn;
  
}