// 10. indexOf() может быть невероятно полезен для быстрой проверки наличия элемента в массиве. Мы определили функцию, quickCheck которая принимает массив и элемент в качестве аргументов. Измените функцию using indexOf() так, чтобы она возвращала значение true, если переданный элемент существует в массиве, а false если нет.



function quickCheck(arr, elem) {
    if (arr.indexOf(elem) >= 0) {
      return true;
    }
    return false;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


