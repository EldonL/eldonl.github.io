const container = document.getElementsByClassName("vr-container")[0];
const headset = document.getElementsByClassName("headset")[0];


window.addEventListener("scroll", () => {
  const section = document.getElementsByClassName("cubeats-hero")[0];
  const rect = section.getBoundingClientRect();

  // 0 → 1 progress through scroll
  const raw = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);

  const delay = 0.15;
  const progress = Math.max((raw - delay) / (1 - delay), 0);

  // Set different end scales based on screen width
  const screenWidth = window.innerWidth;
  let endScale;
  if (screenWidth >= 1440) {
    endScale = 0.5;
  } else if (screenWidth >= 666) {
    endScale = 0.55;
  } else {
    endScale = 0.85; // end at 0.3 for smaller screens
  }

  const scale = 1 - progress * endScale;

  // Optional upward movement
  const translateY =progress * 30;

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
  // header.style.opacity = opacity;
});