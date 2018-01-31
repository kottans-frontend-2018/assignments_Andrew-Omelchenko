var timer = function() {
  const clockId = document.getElementById("clock");

  function align(smth) {
      if ( smth < 10) {
          return "0" + smth.toString();
      } else {
          return smth.toString();
      }
  }

  function setCurrentTime() {
      // using let -> new values at each call
      let current = new Date();
      clockId.innerHTML = 
          align(current.getHours()) + ":" + 
          align(current.getMinutes()) + ":" + 
          align(current.getSeconds());
  }

  setInterval(setCurrentTime, 1000); 
};

timer();