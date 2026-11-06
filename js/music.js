/* Place your licensed/owned MP3 file at assets/music/our-song.mp3. */
function setupMusic() {
  const audio = document.getElementById("backgroundMusic");
  const button = document.getElementById("musicToggle");
  const label = document.getElementById("musicLabel");
  const saved = SiteStorage.get("olm-music-playing", false);
  const update = () => {
    const playing = !audio.paused;
    label.textContent = playing ? "Pause music" : "Play music";
    button.setAttribute("aria-label", playing ? "Jeda musik" : "Putar musik");
    button.classList.toggle("is-playing", playing);
  };
  button.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        SiteStorage.set("olm-music-playing", true);
      } else {
        audio.pause();
        SiteStorage.set("olm-music-playing", false);
      }
    } catch {
      label.textContent = "Add your-song.mp3";
    }
    update();
  });
  audio.addEventListener("play", update);
  audio.addEventListener("pause", update);
  if (saved) label.textContent = "Play music";
}
