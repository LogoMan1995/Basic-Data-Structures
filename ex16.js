// 16. Используйте ключевое слово delete, чтобы удалить ключи oranges, plums и strawberries из foods объекта.



let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
 delete foods.oranges;
 delete foods.plums;
 delete foods.strawberries;
  
  console.log(foods);

