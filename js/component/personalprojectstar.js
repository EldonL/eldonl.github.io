const personalProjectStarTemplate = document.createElement('template');

personalProjectStarTemplate.innerHTML = `
<style>

  .starblocks .starblock{
    padding-left:1em;
    padding-bottom:1em;
    padding-top:1em;
  }

  .starblocks .starblock .title{
    font-weight:bold;
    font-size: 2.5em;
    text-align:center;
  }

  .starblocks .starblock .contentimages .content{
    font-size: 1.5em;
    text-align:left;
  }

  .starblocks .starblock .contentimages .aimage{

    text-align:center;
  }

  @media screen and (min-width: 1440px){  
    .starblocks .starblock{
      padding-left:1em;
      padding-bottom:1em;
      padding-top:1em;
      display:grid;
      grid-template-columns: 15% 85%;
    }

    .starblocks .starblock .title{

      text-align:left;
    }

    .starblocks .starblock .contentimages{
      display:grid;  
    }
    .starblocks .starblock .contentimages .aimage{

      text-align:left;
    }
    
  }



</style>
<div class="starblocks">
    <div class="starblock">
        <div class="title">Situation</div>
        <div class="contentimages">
            <div class="content"><slot name="situation"></slot></div>
        </div>

    </div>
    <div class="starblock">
        <div class="title">Task</div>
        <div class="contentimages">
            <div class="content"><slot name="task"></slot></div>
        </div>
    </div>
    <div class="starblock">
        <div class="title">Action</div>
        <div class="contentimages">
            <div class="content"><slot name="action1text"></slot></div>
            <div class="aimage"><slot name="action1image"></slot></div>
            <div class="content"><slot name="action2text"></slot></div>
            <div class="aimage"><slot name="action2image"></slot></div>
            <div class="content"><slot name="action3text"></slot></div>
            <div class="aimage"><slot name="action3image"></slot></div>
            <div class="content"><slot name="action4text"></slot></div>
            <div class="aimage"><slot name="action4image"></slot></div>
            <div class="content"><slot name="action5text"></slot></div>
            <div class="aimage"><slot name="action5image"></slot></div>
        </div>

    </div>
    <div class="starblock">
        <div class="title">Result</div>
        <div class="contentimages">
            <div class="content"><slot name="result1text"></slot></div>
            <div class="aimage"><slot name="result1image"></slot></div>
            <div class="content"><slot name="result2text"></slot></div>
            <div class="aimage"><slot name="result2image"></slot></div>
            <div class="content"><slot name="result3text"></slot></div>
            <div class="aimage"><slot name="result3image"></slot></div>
            <div class="content"><slot name="result4text"></slot></div>
            <div class="aimage"><slot name="result4image"></slot></div>
        </div>

    </div>

</div>

`;



class PersonalProjectStar extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(personalProjectStarTemplate.content);
      

    }
  

  }
  



  customElements.define('personalprojectstar-component', PersonalProjectStar);