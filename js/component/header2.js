const header2template = document.createElement('template');
header2template.innerHTML=`
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<style>


.nav_header {
  overflow: hidden;
  background-color: #f1faff;


}

.nav_header a {

  color: black;
  text-align: center;
  padding: 0.5rem;

  text-decoration: none;
  font-size: 1rem; 

}

.nav_header a.nav_logo {
  font-size: 2rem;
  font-weight: bold;
  float: left;
  padding:1rem 1rem;
}

.nav_header a:hover {
  background-color: #ddd;
}

.nav_menu {
  float: right;
  padding-top: 0.5rem;
}

.nav_menu ul{
  display:flex;
  padding-right:1rem;
}

.nav_menu ul li{
  list-style: none;
}
  
.nav_menu ul a {
  position: relative;
  text-decoration: none;
}

.nav_menu ul a.active {
  color: #3b82f6;
}

.nav_menu ul a.active::after {
  width: 100%;
  background: #3b82f6;
}


.nav_menu ul a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 2px;
  background: transparent;
  transition: width 0.25s ease, background 0.25s ease;
}

.nav_menu ul .nav_menu_link{
  justify-content: center;
  display:flex;
  align-items:center;
  
}

.nav_hamburger{
  width:2.625rem;
  height:1.8382rem;
  display:none; 
  flex-direction:column;
  justify-content: space-around;
  position:absolute;
  cursor:pointer;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

}

.nav_hamburger_line{
  height:0.188rem;
  width: 100%; 
  background-color: #000000; 
  border-radius: 0.625rem;
  transition: all ease-in-out 0.2s;
}

@media screen and (max-width: 960px){
    .nav_hamburger{
      display:flex; 
      
    }

    .nav_menu{
      position:absolute; 
      display:flex;
      align-items: center; 
      background: #f3f4ff;
      right: -100rem;
      width:50%; 
      height: 100vh; //rely on the viewport full screen
      transition: all ease-in-out 0.4s;
      z-index:-1;
      padding-top: 0rem;
    }

    .nav{
      flex-direction:column;
      align-items:flex-start;
    }

    .nav_menu ul{
      flex-direction:column;
      width:100%; 
    }

    .nav_menu ul li{
      text-align: center; 
      padding-bottom: 2rem;
    }

    .nav_menu.active{
      right:0;
    }

    .nav_hamburger.active :nth-child(1){
      transform:rotate(45deg) translate(0.45rem, 0.2625rem);
    }

    .nav_hamburger.active :nth-child(2){
      opacity:0;
    }

    .nav_hamburger.active :nth-child(3){
      transform:rotate(-45deg) translate(0.45rem, -0.2625rem);
    }
}

</style>

    <nav class="nav_header">
      <a href="index.html" class="nav_logo">ELDON LIN</a>
      <button class="nav_hamburger" type="button">
        <span class="nav_hamburger_line"></span>
        <span class="nav_hamburger_line"></span>
        <span class="nav_hamburger_line"></span>
      </button>
      <div class="nav_menu">
        <ul>
          <li class="nav_menu_link"><a href="index.html#featuredproject">Featured Projects</a></li>
          <li class="nav_menu_link"><a href="index.html#techstacksection">Tech Stack</a></li>
          <li class="nav_menu_link"><a href="index.html#workexperience">Work Experiences</a></li>
          <li class="nav_menu_link"><a href="index.html#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

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
const headerComponent = document.querySelector("header2-component");
const shadow = headerComponent.shadowRoot;
const hamburger = shadow.querySelector(".nav_hamburger");
const linksContainer = shadow.querySelector(".nav_menu");
const links = shadow.querySelectorAll(".nav_menu_link");

const sectionIds = ['featuredproject', 'techstacksection', 'workexperience', 'contact'];


hamburger.addEventListener("click",()=>{
   linksContainer.classList.toggle("active");
   hamburger.classList.toggle("active");
});

window.addEventListener("resize",()=>{
  if(window.matchMedia("(max-width:960px)").matches){
    closeMenu();
  }
});


if(window.matchMedia("(max-width:960px)").matches){
    closeMenu();
  }

function closeMenu(){
    links.forEach((link)=>{
    link.addEventListener("click",()=>{
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}


function getNavLinks() {
  const headerComponent = document.querySelector('header2-component');
  if (!headerComponent || !headerComponent.shadowRoot) return {};
  
  const links = {};
  sectionIds.forEach(id => {
    links[id] = headerComponent.shadowRoot.querySelector(`.nav_menu a[href="index.html#${id}"]`);
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