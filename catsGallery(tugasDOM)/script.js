//Pop Up
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

//Selector
filterSelector("all")
function filterSelector(select) {
  var x, i;
  x = document.getElementsByClassName("col");
  if (select == "all") select = "";

  for (i = 0; i < x.length; i++) {  
    AddClass(x[i], "show");
    if (x[i].className.indexOf(select) > -1) RemoveClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(elements, name) {
  var i, arr1, arr2;
  arr1 = elements.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      elements.className += " " + arr2[i];
    }
  }
}

// Hide elements selected
function RemoveClass(elements, name) {
  var i, arr1, arr2;
  arr1 = elements.className.split(" ");
  arr2 = name.split(" ");
  console.log(arr1)
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  elements.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnNav = document.getElementById("nav");
var btn = btnNav.getElementsByClassName("btn");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
