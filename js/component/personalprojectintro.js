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
    display:none; //display none because we did not figure out a way to not do manual next
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

  .covers{
    padding-left:1em;
  }

  .websiteButtons{
    padding-left:1em;
  }

  .websiteButtons .websiteButton{
      padding-top: 1em;
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

  .descriptionsection .description .content{
    font-size:1.5em;
  }

  .descriptionsection .subinfos{
    padding-top: 1em;
    padding-left: 1em;
  }


  .descriptionsection .subinfos .subtitle{
    font-size:2em;
    font-weight:bold;
    padding-top: 0.5em;
    padding-bottom: 0.1em;
  }

  .descriptionsection .subinfos .content{
    font-size:1.5em;
  }

  @media screen and (min-width: 1024px){
    .title{
      text-align:center;
    }

    .covers{
      text-align:center;
    }
    
    .descriptionsection{
      text-align:center;
    }

    .descriptionsection .description .content{
      text-align:left;
    }
    .descriptionsection .subinfos .subtitle{
      font-size:2em;
    }
    
  
    .descriptionsection .subinfos .content{
      font-size:2em;
    }

    .descriptionsection .subinfos{
      display:grid;
      justify-content:center;
    }
    
    .descriptionsection .subinfos .subinfo{
      display:flex;
      align-items:flex-end;
      justify-content:left;
      flex-wrap:wrap;

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

    .covers{
      clear:both;

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

    
    .descriptionsection .description .header{
      font-size:3.5em;
      text-align:left;
    }

    .descriptionsection .description .content{
      font-size:1.5em;
      width:45em;
    }
  
    .descriptionsection .subinfos .subtitle{
      font-size:1.5em;
      padding-right:0.5em;
      padding-top: 0em;

    }
    
  
    .descriptionsection .subinfos .content{
      font-size:1.5em;
    }

    .descriptionsection .subinfos .subinfo{
      display:flex;
      align-items:flex-end;
      flex-wrap:wrap;

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
  <div class="covers">
      <div class="coverImage">
          <slot name="webpageImage"></slot>
      </div>
      <div class="coverVideo">
          <slot name="webpageVideo"></slot>
      </div>
  </div>


  <div class="descriptionsection">
      <div class="description">
          <div class="header">Description</div>
          <div class="content">
              <slot name="description"></slot>
          </div>
      </div>
      <div class=buttonsubinfo>
          <div class="websiteButtons">
              <div class="websiteButton">
                <slot name="websiteButton"></slot>
              </div>    
              <div class="websiteButton">
                  <slot name="videoButton"></slot>
              </div>
          </div>
          <div class="subinfos">
              <div class="platform subinfo">
                  <div class="subtitle">Platform:</div>
                  <div class="content">
                      <slot name="platform"></slot>
                  </div>
              </div>
              <div class="language subinfo">
                  <div class="subtitle">Language:</div>
                  <div class="content">
                      <slot name="languages"></slot>
                  </div>
              </div>
              <div class="tools subinfo">
                  <div class="subtitle">Tools:</div>
                  <div class="content">
                      <slot name="tools"></slot>
                  </div>
              </div>
              <div class="timeline subinfo">
                  <div class="subtitle">TimeLine:</div>
                  <div class="content">
                      <slot name="timeline"></slot>
                  </div>
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