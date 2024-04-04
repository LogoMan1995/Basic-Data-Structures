// 15. Мы определили функцию , checkInventory которая получает отсканированный элемент в качестве аргумента. Возвращает текущее значение ключа scannedItem в foods объекте. Вы можете предположить, что в качестве аргумента будут предоставлены только действительные ключи checkInventory.



let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem]
  }
  
  console.log(checkInventory("apples"));
