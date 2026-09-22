// Annoying script: animate, rotate, and randomly recolor elements
window.addEventListener('load', function(){
  try{
    // Annoying on-load alert
    setTimeout(function(){ alert('Welcome to the worst website. You were warned.'); }, 400);

    // Make title blink, spin cards, and alternate background hue
    var title = document.querySelector('.title');
    if(title){ title.classList.add('blink'); }

    var cards = Array.from(document.querySelectorAll('.card'));
    cards.forEach(function(c, i){
      // staggered spin and shake
      if(i % 2 === 0) c.classList.add('spin'); else c.classList.add('shake');
      // random rainbow border flashing
      setInterval(function(){
        c.style.borderColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        c.style.background = 'linear-gradient(90deg,'+randomColor()+','+randomColor()+')';
      }, 800 + Math.random()*1200);
    });

    // modal that'll pop up when you click any card
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    var modalDesc = document.getElementById('modal-desc');
    var modalClose = document.getElementById('modal-close');
    cards.forEach(function(card){
      card.addEventListener('click', function(){
        var t = card.getAttribute('data-title') || 'Surprise';
        var d = card.getAttribute('data-desc') || 'You clicked something!';
        if(modal){
          modalTitle.textContent = t.toUpperCase();
          modalDesc.textContent = d + ' — THIS RULES.';
          modal.setAttribute('aria-hidden','false');
        }
      });
    });
    if(modalClose) modalClose.addEventListener('click', function(){ if(modal) modal.setAttribute('aria-hidden','true'); });

    // rogue background hue changer
    setInterval(function(){
      document.body.style.filter = 'hue-rotate('+(Math.floor(Math.random()*360))+'deg)';
    }, 2000);
  }catch(e){console.error(e)}

  function randomColor(){ return '#'+Math.floor(Math.random()*16777215).toString(16); }
});
