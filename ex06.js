// 6. Мы определили функцию , htmlColorNames которая принимает в качестве аргумента массив цветов HTML. Измените функцию, splice() удалив первые два элемента массива и добавив 'DarkSalmon' и 'BlanchedAlmond'в соответствующие места.



function htmlColorNames(arr) {
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
    return arr;
  }
  
  console.log(
    htmlColorNames([
      "DarkGoldenRod",
      "WhiteSmoke",
      "LavenderBlush",
      "PaleTurqoise",
      "FireBrick"
    ])
  );


