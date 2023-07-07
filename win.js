const redirectButton = document.getElementById('backToPlay');

    redirectButton.addEventListener('click', function() {
      window.location.href = 'index.html'; // Replace with the desired URL or the filename of the HTML page
    });

    var mainButton = document.getElementById('mainButt');
    var popupContent = document.querySelector('.popupContent');
    var closeButton = document.getElementById('closeButton');

mainButton.addEventListener('click', function() {
  popupContent.classList.add('show');
});

closeButton.addEventListener('click', function() {
  popupContent.classList.remove('show');
});
