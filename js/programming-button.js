function firstMove() {
  var elem = document.getElementById("myBar");
  var width = 0;
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
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 40) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}
// update-01 and all var-width set to 0
function thirdMove() {
  var elem = document.getElementById("myThirdBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function fourthMove() {
  var elem = document.getElementById("myFourthBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function fifthMove() {
  var elem = document.getElementById("myFifthBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}
