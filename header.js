function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  




 let navLinks = document.querySelector('.mainMenu');
 let closeMenu = document.querySelector('.closeMenu');
 let openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show() {
  navLinks.style.display = 'flex';
  navLinks.style.top = '0';
}

function close() {
  navLinks.style.top = '-100%'
}



