const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<style>
.navbar {
    padding: 1em 1em 0em 1em;
}


.navbar .container .mobile-menu-container{
    display:flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .container nav.responsive-side-menu{
    display: block;
    position:fixed;
    z-index: 999;
    width: 66%;
    right:0;
    top: 0;
    background: var(--additional-color);
    height: 150vh;
    padding-right: 4em;
    padding-top: 2em;
}

.navbar .container nav{
    display:none;

}

.navbar .container .nav-mobile{
    margin:0em;
}

.navbar .container .mobile-menu-container .bi-list{
    font-size: 4em;
}

.navbar .container nav .exit-circle{   
    font-size: 4em;
    text-align: right;


}


.navbar .container nav .navigation{

    text-align: right;
    display:grid;
    row-gap: 3em;
}


.navbar .container nav .navigation li a{
    text-decoration: none;
    font-size: 1.5em;
    color: #000000;

}

.navbar .container nav .navigation li a:hover{
    color:var(--primary-color);
    
}
@media screen and (min-width: 1440px){  
    .navbar .container{
        display:flex;
        justify-content: space-between;
        align-items: center;
        
    }

    .navbar .container .bi-list{
        display:none;   
    }

    
    .navbar .container nav{
        display:block;
    }

        
    .navbar .container nav.responsive-side-menu{
        display: block;
    }

    .navbar .container nav .exit-circle{
        display:none;
    }
 

    .navbar .container nav .navigation{    
        display:flex;  
        flex-wrap: wrap;
        column-gap:3em;
        text-align:left;
   

    }

    ul{
        list-style-type: none;
    }

}

</style>
<div class="navbar bg-odd">
<div class="container">
    <div class="mobile-menu-container">
        <logo-component></logo-component>
        <i id="mobile-menu" class="bi bi-list" onclick="OnMobileMenuClick()"></i>
    </div>
   

    <nav id="nav-mobile">
        <div class="exit-circle">
            <i id="mobile-exit" class="bi bi-x-circle-fill" onclick="OnMobileExitClick()"></i>
        </div>
        <ul class="navigation">
            <li><a href="#about" onclick="OnMobileExitClick()">About</a></li>
            <li><a href="#skill" onclick="OnMobileExitClick()">Skills</a></li>                    
            <li><a href="#professionalexperience" onclick="OnMobileExitClick()">Professional Experience</a></li>
            <li><a href="#personalproject" onclick="OnMobileExitClick()">Personal Projects</a></li>
            <li><a href="#contact" onclick="OnMobileExitClick()">Contact</a></li>
        </ul>
    </nav>
</div>
</div>   
`;



class Header extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      shadowRoot.appendChild(headerTemplate.content);
      const nav = this.shadowRoot.getElementById('nav-mobile');
    }

  }
  
customElements.define('header-component', Header);


