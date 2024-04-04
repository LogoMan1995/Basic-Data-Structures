// 3. Мы определили функцию mixedNumbers, которой передаем массив в качестве аргумента. Измените функцию, используя push() и unshift() для добавления 'I', 2, 'three'в начало массива и 7, 'VIII', 9 в конец, чтобы возвращаемый массив содержал представления чисел 1–9 по порядку.



function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
      return arr;
    }
    
    console.log(mixedNumbers(['IV', 5, 'six']));