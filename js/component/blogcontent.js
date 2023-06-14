const blogContentTemplate = document.createElement('template');

blogContentTemplate.innerHTML = `
<style>

  .container{
    padding-left:1em;
    padding-bottom:1em;
    padding-top:1em;
  }



  .diarypostblocks .diarypostblock .contentimages .content{
    font-size: 1.5em;
    text-align:left;

  }

  .diarypostblocks .diarypostblock .contentimages .aimage{

    text-align:center;
  }  



  @media screen and (min-width: 1024px){
    .container{
      padding-left:20em;
      padding-right:20em;
      padding-top:3em;

    }

    .recentblog{
      display:flex;
      justify-content:space-between;
    }



  }

  @media screen and (min-width: 1440px){  



    .diarypostblocks .diarypostblock .contentimages{
      display:grid;  
    }
    .diarypostblocks .diarypostblock .contentimages .aimage{

      text-align:left;
    }
    


  }



</style>
<div class="container">
<div class="diarypostblocks">
    <div class="diarypostblock">

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
            <div class="content"><slot name="action15text"></slot></div>
            <div class="aimage"><slot name="action15image"></slot></div>
            <div class="content"><slot name="action16text"></slot></div>
            <div class="aimage"><slot name="action16image"></slot></div>
            <div class="content"><slot name="action17text"></slot></div>
            <div class="aimage"><slot name="action17image"></slot></div>
            <div class="content"><slot name="action18text"></slot></div>
            <div class="aimage"><slot name="action18image"></slot></div>
            <div class="content"><slot name="action19text"></slot></div>
            <div class="aimage"><slot name="action19image"></slot></div>
            <div class="content"><slot name="action20text"></slot></div>
            <div class="aimage"><slot name="action20image"></slot></div>
            <div class="content"><slot name="action21text"></slot></div>
            <div class="aimage"><slot name="action21image"></slot></div>
            <div class="content"><slot name="action22text"></slot></div>
            <div class="aimage"><slot name="action22image"></slot></div>
            <div class="content"><slot name="action23text"></slot></div>
            <div class="aimage"><slot name="action23image"></slot></div>
            <div class="content"><slot name="action24text"></slot></div>
            <div class="aimage"><slot name="action24image"></slot></div>
            <div class="content"><slot name="action25text"></slot></div>
            <div class="aimage"><slot name="action25image"></slot></div>
            <div class="content"><slot name="action26text"></slot></div>
            <div class="aimage"><slot name="action26image"></slot></div>
            <div class="content"><slot name="action27text"></slot></div>
            <div class="aimage"><slot name="action27image"></slot></div>
            <div class="content"><slot name="action28text"></slot></div>
            <div class="aimage"><slot name="action28image"></slot></div>
            <div class="content"><slot name="action29text"></slot></div>
            <div class="aimage"><slot name="action29image"></slot></div>
            <div class="content"><slot name="action30text"></slot></div>
            <div class="aimage"><slot name="action30image"></slot></div>
        </div>

    </div>
    <div class="diarypostblock">

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
</div>


`;


var shadowRoot;
class BlogContent extends HTMLElement {
    constructor() {
      super();

      shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(blogContentTemplate.content);
    }
  

  }
  



  customElements.define('blogcontent-component', BlogContent);