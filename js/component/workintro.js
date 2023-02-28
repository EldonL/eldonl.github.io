const workIntroTemplate = document.createElement('template');

workIntroTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <style>
  
  .bi{
    cursor: pointer;
  }


  
  .title .arrows{
    display:flex;
    justify-content:center;
    column-gap: 3em;
  }

  .title .arrows .arrow .text{
    font-size: 1.25em;
  }

  .title .arrows .arrow .bi{
    font-size: 6em;

  }

  .title .header{
    font-size:3.25em;
    padding-left:1rem;
    font-weight:bold;
  }


  .descriptionsection .description{
    padding-left: 1em;
    padding-top: 1em;
  }

  .descriptionsection .description .header{
    font-size:2.5em;
    font-weight:bold;
    padding-bottom: 0.1em;
  }


  .descriptionsection .subinfos .content{
    font-size:1.5em;
  }

  @media screen and (min-width: 1024px){
    .title{
      text-align:center;
      clear:both;
    }

    
    .descriptionsection{
      text-align:center;
    }

    .descriptionsection .description .content{
      text-align:left;
    }

  }

  @media screen and (min-width: 1440px){  
    .title .arrows{
      float:right;
      padding-top: 2em;
      padding-right:1em;
    }

      .title .header{
        text-align:center;
        float:left;
        font-size: 7em;
        padding-left:1rem;
    }

    .websiteButtons{
      display:flex;
      column-gap:1em;
    }

    .descriptionsection{
      display:flex;
      justify-content:space-between;
      padding-right:1em;
    }

    
    .descriptionsection .description .content{
      font-size:2.5em;
      width:30em;
    }
  
  
  }


  </style>

  <div class="container">
  <div class="title">
      <div class="arrows">
          <div class="arrow left-arrow">
              <div class="text">prev project</div>
              <i class="bi bi-arrow-left"></i>
          </div>
          <div class="arrow right-arrow">
              <div class="text">next project</div>
              <i class="bi bi-arrow-right"></i>
          </div>
      </div>
      <div class="header">
          <div>
              <slot name="title"></slot>
          </div>
      </div>

  </div>



  <div class="descriptionsection">
      <div class="description">
          <div class="content">
              <slot name="description"></slot>
          </div>
          <div class="websiteButton">
            <slot name="websiteButton"></slot>
          </div>
      </div>
        <slot name="workimage"></slot>
      </div>
    </div>







</div>
`;



class WorkIntro extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(workIntroTemplate.content);
      

    }
  

  }
  



  customElements.define('workintro-component', WorkIntro);