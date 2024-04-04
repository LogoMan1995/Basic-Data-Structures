// 9. Мы определили функцию spreadOut, которая возвращает переменную sentence. Измените функцию, используя оператор расширения , чтобы она возвращала массив ['learning', 'to', 'code', 'is', 'fun'].



function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment,'is','fun']
    return sentence;
  }
  
  console.log(spreadOut());