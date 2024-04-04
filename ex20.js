// 20. Взгляните на объект, который мы предоставили в редакторе кода. Объект user содержит три ключа. Ключ data содержит пять ключей, один из которых содержит массив friends. Отсюда вы можете увидеть, насколько гибкими являются объекты как структуры данных. Мы начали писать функцию addFriend. Завершите его написание, чтобы он брал user объект, добавлял имя аргумента friend в хранящийся в нем массив user.data.friends и возвращал этот массив.



let user = {
    name: "Kenneth",
    age: 28,
    data: {
      username: "kennethCodesAllDay",
      joinDate: "March 26, 2016",
      organization: "freeCodeCamp",
      friends: ["Sam", "Kira", "Tomo"],
      location: {
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;

  }
  
  console.log(addFriend(user, "Pete"));