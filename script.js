// Play audio on load (mobile browsers may block autoplay)
window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  music.volume = 0.3; // adjust volume here
  music.play().catch(() => {
    // show play button if autoplay blocked
    alert('Klik layar untuk mulai musik');
    document.body.addEventListener('click', () => music.play());
  });
});