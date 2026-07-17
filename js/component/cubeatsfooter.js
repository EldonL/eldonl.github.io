const cubeatsfooterTemplate = document.createElement('template');

cubeatsfooterTemplate.innerHTML =`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="css/cubeats.css">   
<style>
  .bi{
    cursor:pointer;

  }

  .bi:hover{
    opacity:0.5;
  }
    

  .call-to-action {
   font-size: 1.25rem; 
    padding: 1rem 1rem;
  }


  .cubeats-footer-section .container{
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding:5rem;

  }

  .cubeats-footer-section .container .ready-to-talk{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  
    .cubeats-footer-section .container .ready-to-talk img{
    width:20rem;
}

  .cubeats-footer-section .container .contact-links{
    display:flex; 
    justify-content:center; 
    gap:1rem;
    font-size: 3rem;
    text-decoration:none;
  }

.cubeats-footer-section .container .contact-links a {
    color: #0B1026;
    font-size: 3rem;

    width: 5rem;
    height: 5rem;

    display:flex;
    align-items:center;
    justify-content:center;


    transition: all .2s ease;
    text-decoration: none; 
}

.cubeats-footer-section .container .contact-links a:hover{
    transform: translateY(-5px);
    opacity: 0.7;
  }

  </style>

  <section class="cubeats-footer-section" id="contact">
        <div class="container">
            <div class="ready-to-talk">
                <h1>Want more Cubeats? Contacts us!</h1>
                <img src='images_videos/PersonalProjects/Cubeats/logo.png'>
            </div>

            <div class="contact-links">                
                <a href="https://www.linkedin.com/in/eldon-lin"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.youtube.com/channel/UC-igukaTIJFHYS8TNkcJ4lA"><i class="bi bi-youtube"></i></a>
                <a href="https://x.com/ErrorPowerVRAR"><i class="bi bi-twitter-x"></i></a>
                <a href="mailto:vrgameseldon@gmail.com"><i class="bi bi-envelope"></i></a>
            </div>


        </div>
    </section>
`;


class CubeatsFooter extends HTMLElement{
 constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      shadowRoot.appendChild(cubeatsfooterTemplate.content);
      var node = cubeatsfooterTemplate;
      var clone = node.cloneNode(true);

      
    }
}

customElements.define('cubeats-footer-component', CubeatsFooter);