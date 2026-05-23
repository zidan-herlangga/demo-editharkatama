/**
 * Music Background
 */
document.addEventListener("DOMContentLoaded", function () {
  const musicButton = document.getElementById("musicButton");
  const backgroundMusic = document.getElementById("backgroundMusic");

  console.log(musicButton); // Should log the button element or null
  console.log(backgroundMusic); // Should log the audio element or null

  if (musicButton && backgroundMusic) {
    musicButton.addEventListener("click", function (event) {
      event.preventDefault();
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
      } else {
        backgroundMusic.pause();
        musicButton.innerHTML = '<i class="bi bi-music-player-fill"></i>';
      }
    });
  } else {
    console.error("Required elements are missing.");
  }
});
