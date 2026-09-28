// Parallax für Logo basierend auf Mausbewegung (leicht, performant)
(function logoParallax(){
  const logo = document.getElementById('clanLogo');
  if(!logo) return;
  const strength = 0.02; // kleiner Wert = dezenter Effekt
  let lastX = 0, lastY = 0;
  window.addEventListener('mousemove', (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    // lerp for smoothness
    lastX += (dx - lastX) * 0.12;
    lastY += (dy - lastY) * 0.12;
    logo.style.transform = `translate3d(${lastX}px, ${lastY}px, 0) rotate(${lastX * 0.02}deg)`;
  });
})();

// Section reveal on scroll (IntersectionObserver, performant)
(function revealOnScroll(){
  const cards = document.querySelectorAll('.card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.12});
  cards.forEach(c => io.observe(c));
})();

// Add ripple class to action buttons for tactile feedback
(function addRipple(){
  document.querySelectorAll('.actions button').forEach(btn => {
    btn.classList.add('ripple');
  });
})();
