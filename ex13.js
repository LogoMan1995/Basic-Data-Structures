// 13. Объект foodsбыл создан с тремя записями. Используя выбранный вами синтаксис, добавьте к нему еще три записи: bananasсо значением 13, grapesсо значением 35и strawberriesсо значением 27.



const foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  foods['bananas'] = 13;
  foods['grapes']  = 35;
  foods['strawberries'] = 27;
  
  console.log(foods);