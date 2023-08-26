  var posy = 0;
  let obj = document.getElementById("object");
  let topPos = 0;
  let down = true;
  var moveBy = 6;
  setInterval(() => {
    if (down) {
      topPos++;
      obj.style.top = topPos + "px";
      if (topPos === window.innerHeight - obj.clientHeight) {
        down = false;
      }
    } else {
      topPos--;
      obj.style.top = topPos + "px";
      if (topPos === 0) {
        down = true;
      }
    }
  }, 10);
  obj.style.top = posy + 'px';
   var player = document.getElementById('player');
  var positionX = 0;
  var positionY = 0;
  var distance = 6;
  document.addEventListener('keydown', function(event) {
    var key = event.key;
      switch (key) {
      case 'ArrowLeft':
        positionX -= distance;
        break;
      case 'ArrowUp':
        positionY -= distance;
        break;
      case 'ArrowRight':
        positionX += distance;
        break;
      case 'ArrowDown':
        positionY += distance;
        break;
    }
      player.style.left = positionX + 'px';
      player.style.top = positionY + 'px';
      event.preventDefault();

      console.log("object posy = " + posy);
      console.log("object topPos = " + topPos);
      console.log("positionY player = " + (positionY));

      console.log("positionX player = " + (positionX));

      if ( (positionY > topPos - 60 && positionY < topPos + 60 ) 
        && (positionX >60 && positionX < 180)
      ) {
        alert("Game Over!");
      };
      
  });
