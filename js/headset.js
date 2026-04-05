const container = document.getElementsByClassName("vr-container")[0];
const headset = document.getElementsByClassName("headset")[0];

window.addEventListener("scroll", () => {
  const section = document.getElementsByClassName("section")[0];
  const rect = section.getBoundingClientRect();

  // 0 → 1 progress through scroll
  const raw = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);

  const delay = 0.15;
  const progress = Math.max((raw - delay) / (1 - delay), 0);

  // Read baseScale from CSS variable and clamp to min 0.1
  const root = document.documentElement;
  const baseScale = Math.max(0.1, parseFloat(getComputedStyle(root).getPropertyValue('--current-hero-scale').trim()) || 1);

  const scale = baseScale - progress * (baseScale - 0.1);

  // Optional upward movement
  const translateY = 30 - progress * 30;

  // Scale the container (content + headset together)
  container.style.transform = `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`;

 let opacity;
 if(progress ==0){
    opacity = 0;
 }
  else if (progress < 0.2) {
    // very start: almost transparent
    opacity = progress / 0.05; // 0 → 1 quickly  
  } else {
    // mostly visible
    opacity = 1;
  }
  // Clamp between 0 and 1
  opacity = Math.min(Math.max(opacity, 0), 1);

  headset.style.opacity = opacity;
});