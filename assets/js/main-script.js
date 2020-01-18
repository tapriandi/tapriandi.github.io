var e = document.getElementById('tapriandi');
var andi = ['b', 'y', ' ', 't', 'a', 'p', 'r', 'i', ' ', 'a', 'n', 'd', 'i'];
count = 0;
setInterval( function() {
  if (count < andi.length) {
    e.innerHTML += andi[count];
    count ++;
  } else {
    e.innerHTML = "";
    count = 0;
  }
}, 400);
