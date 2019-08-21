  //<input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />
 // <div id="text">Текст</div>


    // Здесь не важно, как мы скрываем текст.
    // Также можно использовать style.display:
      document.getElementById('hider').onclick = function() {
      document.getElementById('text').hidden = true;
    }

//Спрятать себя
//<input type="button" onclick="this.hidden=true" value="Нажми, чтобы спрятать">