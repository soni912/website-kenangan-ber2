/* Add, edit or remove timeline entries in this array only. */
const timelineMemories = [
  {
    date: "July 2025",
    title: "First Meet",
    description:
      "Hari ketika dua cerita mulai saling mengenal. Tidak menyangka pertemuan sederhana ini akan menjadi kenangan yang begitu berarti.",
    image: "assets/images/photo10.jpg",
  },
  {
    date: "September 2025",
    title: "Our First Long Talk",
    description:
      "Obrolan yang awalnya sebentar berubah menjadi cerita panjang. Dari sini kita mulai mengenal banyak hal tentang satu sama lain.",
    image: "assets/images/photo06.jpg",
  },
  {
    date: "20 APRIL 2025",
    title: "First Date",
    description:
      "Jalan bersama untuk pertama kalinya. Tidak harus mewah, yang penting ada cerita baru yang kita bawa pulang.",
    image: "assets/images/photo14.jpg",
  },
  {
    date: "Nov 2026",
    title: "Our Special Day",
    description:
      "Satu tahun penuh cerita, tawa, belajar, dan saling menguatkan. Semoga selalu ada alasan untuk merayakan kita.",
    image: "assets/images/fotoboox.jpg",
  },
  {
    date: "Nov 2026",
    title: "Unforgettable Moment",
    description:
      "Salah satu momen favorit yang akan selalu punya tempat khusus di album kecil kita.",
    image: "assets/images/asia plaza.jpg",
  },
];

function renderTimeline() {
  const container = document.getElementById("timelineList");
  if (!container) return;
  container.innerHTML = timelineMemories
    .map(
      (item, index) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-content">
        <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80'">
        <div class="timeline-text"><span class="timeline-date">${item.date}</span><h3>${item.title}</h3><p>${item.description}</p></div>
      </div>
    </article>`,
    )
    .join("");
  observeReveals();
}
