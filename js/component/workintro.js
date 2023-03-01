const workIntroTemplate = document.createElement('template');

workIntroTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <style>
  
  .bi{
    cursor: pointer;
  }

  .container{
    padding-bottom: 1em;
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
    text-align:center;
  }


  .descriptionsection  .workImage{
    text-align:center;
  }


  .descriptionsection .description {
    padding-bottom: 2em;
    padding-top: 2em;
    display:grid;
    row-gap:2em;
    text-align:center;


  }
  
  .descriptionsection .description .content{
    text-align:left;
    padding-left:1em;
    padding-right:1em;
  }






  @media screen and (min-width: 1440px){  
    .title .arrows{
      justify-content:right;
      padding-top: 2em;
      padding-right:1em;
    }

      .title .header{
        text-align:center;
        clear:both;
        font-size: 10em;

    }


    .descriptionsection{
      display:flex;

      text-align:left;
      justify-content:center;
    }

    .descriptionsection .description {
      padding-left: 0em;
      padding-top: 0em;
      padding-bottom: 0em;
      display:grid;
      row-gap:9em;


    }

    
    .descriptionsection .description .content{
      font-size:2.5em;
      width:30em;
      text-align:left;
    }
  
  
  }


  </style>

<div class="container">
  <div class="title">
      <div class="arrows">
          <div class="arrow left-arrow">
              <div class="text">prev company</div>
              <i class="bi bi-arrow-left"></i>
          </div>
          <div class="arrow right-arrow">
              <div class="text">next company</div>
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
        <div class="workImage"><slot name="workimage"></slot></div>
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