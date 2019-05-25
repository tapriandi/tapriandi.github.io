var images = document.querySelectorAll('.gallery img');
var modal = document.getElementById("myModal");

images.forEach(function (image) {
    image.addEventListener('click', function(event) {
        modal.innerHTML = '<div class="modal-content"><img src="' + event.target.src + '"><br><span>' + event.target.alt + '</span></div>';
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', function () {
  this.style.display = 'none';
});

var active = document.getElementsByClassName('active');
