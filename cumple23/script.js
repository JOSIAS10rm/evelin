var balloon = document.getElementById('balloon');
      
      var x = 0;
      var y = 0;
      var vx = 0;
      var vy = 0;
      
      function update() {
        x += vx;
        y += vy;
      
        if (x < 0 || x > window.innerWidth) {
          vx *= -1;
        }
      
        if (y < 0 || y > window.innerHeight) {
          vy *= -1;
        }
      
        balloon.style.left = x + 'px';
        balloon.style.top = y + 'px';
      }
      
      setInterval(update, 100);