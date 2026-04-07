const footer2Template = document.createElement('template');

footer2Template.innerHTML =`
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
<link rel="stylesheet" href="css/style.css">   
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


  .footer2-section .container{
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .footer2-section .container .contact-links{
    display:flex; 
    justify-content:center; 
    gap:5rem;
    font-size: 3rem;
    text-decoration:none;
  }

.footer2-section .container .contact-links a {
  color: inherit;      
}

  </style>

  <section class="footer2-section" id="contact">
        <div class="container">
            <div class="ready-to-talk">
                <h1>Ready to create immersive experiences together?</h1>
                <a href="https://www.linkedin.com/in/eldon-lin-38a181b0"><button class="call-to-action btn">Contact (LinkedIn)</button></a>
            </div>


            <div class="contact-links">                
                <a href="https://www.youtube.com/channel/UC-igukaTIJFHYS8TNkcJ4lA"><i class="bi bi-youtube"></i></a>
                <a href="https://github.com/EldonL"><i class="bi bi-github"></i></a>
            </div>


        </div>
    </section>
`;


class Footer2 extends HTMLElement{
 constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      shadowRoot.appendChild(footer2Template.content);
      var node = footer2Template;
      var clone = node.cloneNode(true);

      
    }
}

customElements.define('footer2-component', Footer2);