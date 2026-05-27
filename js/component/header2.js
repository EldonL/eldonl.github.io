const header2template = document.createElement('template');
header2template.innerHTML=`
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<style>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}



</style>
<p>HELLO HEADER HERE</p>
<div class="header">
  <a href="#default" class="logo">ELDON LIN</a>
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