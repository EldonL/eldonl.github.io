const workProjectIntroTemplate = document.createElement('template');

workProjectIntroTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <style>
  
  .bi{
    cursor: pointer;
  }

   .directory{
    text-align: left;
    padding-left: 1em;
    font-size: 1.25em;
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
    
        align-items: center;
  }

  .websiteButtons .websiteButton{
      padding-top: 1em;
  }

  .websiteButtons ::slotted(img[slot="appstorebutton"]) {
    margin-top: 1em; /* tweak as needed */
}

  .websiteButtons ::slotted(img[slot="appstorebutton"]),
.websiteButtons ::slotted(img[slot="googleplaybutton"]),
.websiteButtons ::slotted(img[slot="metabutton"]),
.websiteButtons ::slotted(img[slot="metahorizonbutton"]) {
    height: 3em;       /* normalize height */
    width: auto;       /* keep aspect ratio */
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.2s;
}

.websiteButtons ::slotted(img[slot="appstorebutton"]:hover),
.websiteButtons ::slotted(img[slot="googleplaybutton"]:hover),
.websiteButtons ::slotted(img[slot="metabutton"]),
.websiteButtons ::slotted(img[slot="metahorizonbutton"]) {
    transform: scale(1.1);
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
    font-size:1.5em;
    font-weight:bold;
    padding-top: 0.5em;
    padding-bottom: 0.1em;
  }

  .descriptionsection .subinfos .content{
    font-size:1.5em;
  }

  @media screen and (min-width: 1024px){
    .title{
      text-align:left;
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
        text-align:left;
        float:left;

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

      text-align:left;
    }

    .descriptionsection .description .content{

      width:45em;
    }
  
    .descriptionsection .subinfos .subtitle{
      padding-right:0.5em;
      padding-top: 0em;

    }
    
    .descriptionsection .subinfos .subinfo{
      display:flex;
      align-items:flex-end;
      flex-wrap:wrap;

    }
  
  }


  </style>

  <div class="container">
  <p class="directory">professional experience projects</p>
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
              <div class="websiteButtonn">
                <slot name="appstorebutton"></slot>
              </div>
              <div class="websiteButton">
                  <slot name="googleplaybutton"></slot>
              </div>
               <div class="websiteButton">
                  <slot name="metabutton"></slot>
              </div>
               <div class="websiteButton">
                  <slot name="metahorizonbutton"></slot>
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



class WorkProjectIntro extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(workProjectIntroTemplate.content);
      

    }
  

  }
  



  customElements.define('workprojectintro-component', WorkProjectIntro);