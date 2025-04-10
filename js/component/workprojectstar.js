const workProjectStarTemplate = document.createElement('template');

workProjectStarTemplate.innerHTML = `
<style>

  .starblocks .starblock{
    padding-left:1em;
    padding-bottom:1em;
    padding-top:1em;
  }

  .starblocks .starblock .title{
    font-weight:bold;
    font-size: 2em;
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
            <div class="content"><slot name="action6text"></slot></div>
            <div class="aimage"><slot name="action6image"></slot></div>
            <div class="content"><slot name="action7text"></slot></div>
            <div class="aimage"><slot name="action7image"></slot></div>
            <div class="content"><slot name="action8text"></slot></div>
            <div class="aimage"><slot name="action8image"></slot></div>
            <div class="content"><slot name="action9text"></slot></div>
            <div class="aimage"><slot name="action9image"></slot></div>
            <div class="content"><slot name="action10text"></slot></div>
            <div class="aimage"><slot name="action10image"></slot></div>
            <div class="content"><slot name="action11text"></slot></div>
            <div class="aimage"><slot name="action11image"></slot></div>
            <div class="content"><slot name="action12text"></slot></div>
            <div class="aimage"><slot name="action12image"></slot></div>
            <div class="content"><slot name="action13text"></slot></div>
            <div class="aimage"><slot name="action13image"></slot></div>
            <div class="content"><slot name="action14text"></slot></div>
            <div class="aimage"><slot name="action14image"></slot></div>
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
            <div class="content"><slot name="result5text"></slot></div>
            <div class="aimage"><slot name="result5image"></slot></div>
        </div>

    </div>

</div>

`;



class WorkProjectStar extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(workProjectStarTemplate.content);
      

    }
  

  }
  



  customElements.define('workprojectstar-component', WorkProjectStar);