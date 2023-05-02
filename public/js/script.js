function toggleMenu() {
    var navbar = document.getElementById("firstNavBar");
    var icon = document.getElementById("menuIcon");
    var navigation = document.getElementById("firstNav");
    var star = document.getElementById("star");
    
    if (navbar.classList.contains("responsive")) {
      navbar.classList.remove("responsive");
      star.classList.remove("responsive");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      navigation.classList.remove("responsive");
    } else {
      navbar.classList.add("responsive");
      star.classList.add("responsive");
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      navigation.classList.add("responsive");
    }
  }

  function goHome() {
    // Change "index.html" to the path of your home page, if different
    const homePagePath = "../index.html";
    const currentPath = window.location.pathname;

    if (currentPath === homePagePath || currentPath === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = homePagePath;
    }
  }

  const myLink = document.querySelector('#star');
  myLink.addEventListener('click', function() {
    // Do something here, such as navigate to a different page using window.location.href
    window.location.href = "../index.html";
  });

  
  // setInterval(changeImage, 5000); // 5000 milliseconds = 5 seconds
  
  window.addEventListener("scroll", function () {
    const popupImage = document.getElementById("logo-bar");

    if (window.scrollY > 0) {
      // Show the image when the window starts scrolling
      popupImage.style.opacity = "1";
      popupImage.style.visibility = "visible";
    } else {
      // Hide the image when the window is at the top
      popupImage.style.opacity = "0";
      popupImage.style.visibility = "hidden";
    }
  });

  // Menus


 // Declare variables
var counter = 1;
var interval;
var pauseTime = 15000;
var intervalTime = 5000;

// Function to switch radio buttons
function switchRadio() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
  clearTimeout(interval);
  interval = setTimeout(switchRadio, intervalTime);
}

interval = setTimeout(switchRadio, 0);

// Start the radio switching
interval = setTimeout(switchRadio, intervalTime);

// Add event listener to the "radio" button
document.getElementById('radio1').addEventListener('click', function () {
  clearTimeout(interval); // Clear the current interval
  setTimeout(function () { // Set a new interval after the pause time
    interval = setTimeout(switchRadio, intervalTime);
  }, pauseTime);
});

document.getElementById('radio2').addEventListener('click', function () {
  clearTimeout(interval); // Clear the current interval
  setTimeout(function () { // Set a new interval after the pause time
    interval = setTimeout(switchRadio, intervalTime);
  }, pauseTime);
});

document.getElementById('radio3').addEventListener('click', function () {
  clearTimeout(interval); // Clear the current interval
  setTimeout(function () { // Set a new interval after the pause time
    interval = setTimeout(switchRadio, intervalTime);
  }, pauseTime);
});

document.getElementById('radio4').addEventListener('click', function () {
  clearTimeout(interval); // Clear the current interval
  setTimeout(function () { // Set a new interval after the pause time
    interval = setTimeout(switchRadio, intervalTime);
  }, pauseTime);
});

// Buttons

function navigateToPage(buttonElement) {
  const buttonId = buttonElement.id;

  switch (buttonId) {
    case 'button-1':
      window.location.href = '../pages/menus.html';
      break;
    case 'button-2':
      window.location.href = '../pages/eventos.html';
      break;
    case 'button-3':
      window.location.href = '../pages/libroslibres.html';
      break;
    case 'button-4':
      window.location.href = '../pages/contacto.html';
      break;
    case 'boton-consulta':
      window.location.href = '../pages/ubicacion.html';
      break;
    case 'boton-6':
      window.location.href = '../pages/contacto.html';
      break;
      case 'boton-7':	
        window.location.href = '../pages/contacto.html';
        break;
    // Add more cases for additional buttons
    default:
      console.log('No matching button ID found');
  }
}