const header2template = document.createElement('template');
header2template.innerHTML=`
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<style>


.header {
  overflow: hidden;
  background-color: #f1faff;


}

.header a {

  color: black;
  text-align: center;
  padding: 1rem;

  text-decoration: none;
  font-size: 1rem; 
  line-height: 1rem;



}

.header a.logo {
  font-size: 2rem;
  font-weight: bold;
  float: left;
}

.header a:hover {
  background-color: #ddd;

}

.header-right a.active {
  background-color: #d4d4d4;
}

.header-right {
  float: right;
    padding-top: 1rem;
}



</style>

    <div class="header">
      <a href="index.html" class="logo">ELDON LIN</a>
      <div class="header-right">
        <a href="index.html#featuredproject">Featured Projects</a>
        <a href="index.html#techstacksection">Tech Stack</a>
        <a href="index.html#workexperience">Work Experiences</a>
        <a href="index.html#contact">Contact</a>
      </div>
    </div>

`



class Header2 extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(header2template.content);

    }
}
customElements.define("header2-component",Header2);




const hero = document.querySelector(".hero");//get the headset scroll progress so progress in hdaer2 matches headset
const header = document.querySelector(".header2");


const sectionIds = ['featuredproject', 'techstacksection', 'workexperience', 'contact'];

function getNavLinks() {
  const headerComponent = document.querySelector('header2-component');
  if (!headerComponent || !headerComponent.shadowRoot) return {};
  
  const links = {};
  sectionIds.forEach(id => {
    links[id] = headerComponent.shadowRoot.querySelector(`.header-right a[href="index.html#${id}"]`);
  });
  return links;
}

window.addEventListener("scroll", () => {

  const rect = hero.getBoundingClientRect();

  const raw = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);

  const delay = 0.7;
  const progress = Math.max((raw - delay) / (1 - delay), 0);

  header.style.opacity = progress;

  
let currentSection = null;
const triggerPoint = window.innerHeight / 2;

for (const sectionId of sectionIds) {
  const sectionEl = document.getElementById(sectionId);
  if (!sectionEl) continue;

  const rect = sectionEl.getBoundingClientRect();

  if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
    currentSection = sectionId;
    break;
  }
}

// Fallback: if near bottom of page → force Contact active
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
  currentSection = "contact";
}
  
  // Update active class
  const navLinks = getNavLinks();
  Object.entries(navLinks).forEach(([sectionId, link]) => {
    if (link) {
      link.classList.toggle('active', sectionId === currentSection);
    }
  });
});