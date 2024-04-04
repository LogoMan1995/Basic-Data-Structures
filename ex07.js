// 7. Мы определили функцию forecast, которая принимает массив в качестве аргумента. Измените функцию, slice() чтобы извлечь информацию из массива аргументов и вернуть новый массив, содержащий строковые элементы warm и sunny.



function forecast(arr) {
 
    return arr.slice(2,4);
  }
  
  console.log(
    forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
  );

