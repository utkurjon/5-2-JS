let arr = [];
do {
  let a = prompt("Введите команду: add,del или stop чтобы добавить,удалить или остановить Например:add, Уткур", "add, Уткур");
  if (!a) {
    break;
  }
  var b = a.split(", ");
  if (b[0] == "add") {
    arr.push(b[1]);
  }
  if (b[0] == "del") {
    const i = arr.findIndex((el) => el == b[1]);
    if (i + 1) {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
} while (b[0] !== "stop");
alert(arr);

