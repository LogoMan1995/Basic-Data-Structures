// 11. Вывести все числа массива больше 10.



function filteredArray(arr) {
    let newArr = [];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i]>10){
        newArr.push(arr[i])
    }
  }
    return newArr;
  }
  
  console.log(filteredArray([3, 2, 3, 1, 6, 3, 3, 13, 26, 19,  9], 3));




 