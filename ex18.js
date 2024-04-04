// 18. Мы определили функцию countOnline, которая принимает один аргумент: allUsers. Используйте оператор for...in внутри этой функции, чтобы пройтись по allUsers объекту и вернуть количество пользователей, для online свойства которых установлено значение true. countOnline Ниже показан пример объекта, которому можно передать данные . У каждого пользователя будет online свойство, установленное в значение true или false.



const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }




function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
  }