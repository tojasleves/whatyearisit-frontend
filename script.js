
fetch('https://github.com/tojasleves/whatyearisit-backend.git')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });

