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

  .subinfo .subtitle{
    color:blue;
  }

  .subinfo .content{
    color:red;
  }

  </style>

  <div class="container">
  <div class="title">
    <div class="arrows">
          <div class="arrow left-arrow">
              <p class="text">prev project</p>
              <i class="bi bi-arrow-left"></i>
          </div>
          <div class="arrow right-arrow">
              <p class="text">next project</p>
              <i class="bi bi-arrow-right"></i>
          </div>
      </div>
      <div class="header">
        <h1><slot name="title"></slot></h1>
      </div>
     
  </div>
  <div class="coverImage">
      <slot name="webpageImage"></slot>
  </div>
  <div class="coverVideo">
      <slot name="webpageVideo"></slot>
  </div>
  <div class="description">
      <div class="websiteButtons">
          <slot name="videoNoWork"></slot>
          <slot name="websiteButton"></slot>
      </div>
      <div class="descriptionSection">
          <h2 class="header">Description</h2>
          <p class="content">
              <slot name="description"></slot>
          </p>
      </div>
      <div class="subinfo">
          <div class="platform">
              <h4 class="subtitle">Platform</h4>
              <p class="content">
                  <slot name="platform"></slot>
              </p>
          </div>
          <div class="language">
              <h4 class="subtitle">Language</h4>
              <p class="content">
                  <slot name="languages"></slot>
              </p>
          </div>
          <div class="tools">
              <h4 class="subtitle">Tools</h4>
              <p class="content">
                  <slot name="tools"></slot>
              </p>
          </div>
          <div class="timeline">
              <h4 class="subtitle">TimeLine</h4>
              <p class="content">
                  <slot name="timeline"></slot>
              </p>
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