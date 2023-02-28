const personalProjectIntroTemplate = document.createElement('template');

personalProjectIntroTemplate.innerHTML = `
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
    font-size:1.75em;
    text-align: center;
  }

  .covers{
    text-align: center;
  }

  .websiteButtons{
    text-align: center;
  }

  .websiteButtons .websiteButton{
      padding-top: 1em;
  }

  .description{
    padding-left: 1em;
    padding-top: 1em;
  }

  .description .descriptionSection .header{
    font-size:3em;
    font-weight:bold;
    padding-bottom: 0.1em;
  }

  .description .descriptionSection .content{
    font-size:1.5em;
  }

  .description .subinfo{
    padding-top: 1em;
  }


  .description .subinfo .subtitle{
    font-size:2em;
    font-weight:bold;
    padding-top: 0.5em;
    padding-bottom: 0.1em;
  }

  .description .subinfo .content{
    font-size:1.5em;
  }

  @media screen and (min-width: 1440px){  
    .title .arrows{
      float:right;
      padding-top: 9em;
    }

      .title .header{
        text-align:center;
        float:left;
        font-size: 5em;
        padding-left:1em;
    }

    .covers{
      clear:both;

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
        <h1><slot name="title"></slot></h1>
      </div>
     
  </div>
  <div class="covers">
    <div class="coverImage">
        <slot name="webpageImage"></slot>
    </div>
    <div class="coverVideo">
        <slot name="webpageVideo"></slot>
    </div>
  </div>


  <div class="websiteButtons">
          <div class="websiteButton">
              <slot name="videoNoWork"></slot>
          </div>
          <div class="websiteButton">
              <slot name="websiteButton"></slot>
          </div>
    </div>
    <div class="description">
      <div class="descriptionSection">
          <div class="header">Description</div>
          <div class="content">
              <slot name="description"></slot>
          </div>
      </div>
      <div class="subinfo">
          <div class="platform">
              <div class="subtitle">Platform</div>
              <div class="content">
                  <slot name="platform"></slot>
              </div>
          </div>
          <div class="language">
              <div class="subtitle">Language</div>
              <div class="content">
                  <slot name="languages"></slot>
              </div>
          </div>
          <div class="tools">
              <div class="subtitle">Tools</div>
              <div class="content">
                  <slot name="tools"></slot>
              </div>
          </div>
          <div class="timeline">
              <div class="subtitle">TimeLine</div>
              <div class="content">
                  <slot name="timeline"></slot>
              </div>
          </div>
      </div>
    </div>
     

  </div>
`;



class PersonalProjectIntro extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(personalProjectIntroTemplate.content);
      

    }
  

  }
  



  customElements.define('personalprojectintro-component', PersonalProjectIntro);