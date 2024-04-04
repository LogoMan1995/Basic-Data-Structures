// 14. Здесь мы определили объект userActivity, который включает в себя еще один вложенный в него объект. Установите значение online ключа 45.



let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  userActivity.data.online = 45;
  
  console.log(userActivity);

