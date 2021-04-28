function readMore() {
 let dots = document.getElementById("dots");
 let more = document.getElementById("more");
 let btn = document.getElementById("btn");

if (dots.style.display === "none") {
 dots.style.display="inline";
 btn.innerHTML="Подробнее";
 more.style.display="none";
} else {
 dots.style.display="none";
 btn.innerHTML="Скрыть";
 more.style.display="inline";
 }
}

function confirmClose() {
 alert("Ошибка: 107x has occurred. Неопределённый вирус инфицирует ваш жёсткий диск. Сейчас будут удалены все файлы на вашем компьютере.")
 if (confirm("Сообщите вашему поставщику жёсткого диска об этой ошибке."))
 alert('Вирус уничтожен, но информация на вашем компьютере может быть повреждена.');
 else alert('Вы не можете отменить данную операцию, вам придётся перезагрузить Ваш компьютер!');
 {
  parent.close();
 }
}
