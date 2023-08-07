const blogIntroTemplate = document.createElement('template');

blogIntroTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <style>
  
  .bi{
    cursor: pointer;
  }



  .title{
    display: grid;

  }

  .title .header{
    font-size:3.25em;
    padding-left:1rem;
    font-weight:bold;
  }
  .title .info{
    display: grid;
    padding-left:1rem;
  }






  @media screen and (min-width: 1024px){
    .title{
      display: grid;
      padding-left:20em;
      padding-right:20em;
    }

      .title .header{
        text-align:left;
        float:left;

        padding-left:1rem;
    }



    .title .info{
      display: flex;
      justify-content:space-between;
      padding-left:0rem;
    }
 
    .title .info .datetext{
      padding-left:1rem;
      font-size: 1.5em;
   }
 
 
    .title .info .websiteButtons{
     text-align: right;
 
   }
 


  }

  @media screen and (min-width: 1440px){  

   


  
  }


  </style>

  <div class="container">
  <p class="directory">blogs</p>
  <div class="title">      
      <div class="header">
              <slot name="title"></slot>
      </div>
      <div class="info">
            <div class="datetext">
                <slot name="date"><slot>
             </div>
             <div class="websiteButtons">
                <slot name="vlogbutton"></slot>
             </div>
      </div>
  </div>
</div>
`;



class BlogIntro extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(blogIntroTemplate.content);
      

    }
  

  }
  



  customElements.define('blogintro-component', BlogIntro);