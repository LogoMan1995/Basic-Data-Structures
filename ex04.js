// 4. Мы определили функцию popShift, которая принимает массив в качестве аргумента и возвращает новый массив. Измените функцию, используя pop()и shift(), чтобы удалить первый и последний элементы массива аргументов, и присвойте удаленные элементы соответствующим переменным, чтобы возвращаемый массив содержал их значения.



function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
  }
  
  
  console.log(popShift(["challenge", "is", "not", "complete"]));

