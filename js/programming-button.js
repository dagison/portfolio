function firstMove() {
  var elem = document.getElementById("myBar");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function secondMove() {
  var elem = document.getElementById("mySecondBar");
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 30) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}
