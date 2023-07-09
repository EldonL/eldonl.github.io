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
    overflow-wrap: break-word;


    
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
            <div class="content"><slot name="action31text"></slot></div>
            <div class="aimage"><slot name="action31image"></slot></div>
            <div class="content"><slot name="action32text"></slot></div>
            <div class="aimage"><slot name="action32image"></slot></div>
            <div class="content"><slot name="action33text"></slot></div>
            <div class="aimage"><slot name="action33image"></slot></div>
            <div class="content"><slot name="action34text"></slot></div>
            <div class="aimage"><slot name="action34image"></slot></div>
            <div class="content"><slot name="action35text"></slot></div>
            <div class="aimage"><slot name="action35image"></slot></div>
            <div class="content"><slot name="action36text"></slot></div>
            <div class="aimage"><slot name="action36image"></slot></div>
            <div class="content"><slot name="action37text"></slot></div>
            <div class="aimage"><slot name="action37image"></slot></div>
            <div class="content"><slot name="action38text"></slot></div>
            <div class="aimage"><slot name="action38image"></slot></div>
            <div class="content"><slot name="action39text"></slot></div>
            <div class="aimage"><slot name="action39image"></slot></div>
            <div class="content"><slot name="action40text"></slot></div>
            <div class="aimage"><slot name="action40image"></slot></div>
            <div class="content"><slot name="action41text"></slot></div>
            <div class="aimage"><slot name="action41image"></slot></div>
            <div class="content"><slot name="action42text"></slot></div>
            <div class="aimage"><slot name="action42image"></slot></div>
            <div class="content"><slot name="action43text"></slot></div>
            <div class="aimage"><slot name="action43image"></slot></div>
            <div class="content"><slot name="action44text"></slot></div>
            <div class="aimage"><slot name="action44image"></slot></div>
            <div class="content"><slot name="action45text"></slot></div>
            <div class="aimage"><slot name="action45image"></slot></div>
            <div class="content"><slot name="action46text"></slot></div>
            <div class="aimage"><slot name="action46image"></slot></div>
            <div class="content"><slot name="action47text"></slot></div>
            <div class="aimage"><slot name="action47image"></slot></div>
            <div class="content"><slot name="action48text"></slot></div>
            <div class="aimage"><slot name="action48image"></slot></div>
            <div class="content"><slot name="action49text"></slot></div>
            <div class="aimage"><slot name="action49image"></slot></div>
            <div class="content"><slot name="action50text"></slot></div>
            <div class="aimage"><slot name="action50image"></slot></div>
            <div class="content"><slot name="action51text"></slot></div>
            <div class="aimage"><slot name="action51image"></slot></div>
            <div class="content"><slot name="action52text"></slot></div>
            <div class="aimage"><slot name="action52image"></slot></div>
            <div class="content"><slot name="action53text"></slot></div>
            <div class="aimage"><slot name="action53image"></slot></div>
            <div class="content"><slot name="action54text"></slot></div>
            <div class="aimage"><slot name="action54image"></slot></div>
            <div class="content"><slot name="action55text"></slot></div>
            <div class="aimage"><slot name="action55image"></slot></div>
            <div class="content"><slot name="action56text"></slot></div>
            <div class="aimage"><slot name="action56image"></slot></div>
            <div class="content"><slot name="action57text"></slot></div>
            <div class="aimage"><slot name="action57image"></slot></div>
            <div class="content"><slot name="action58text"></slot></div>
            <div class="aimage"><slot name="action58image"></slot></div>
            <div class="content"><slot name="action59text"></slot></div>
            <div class="aimage"><slot name="action59image"></slot></div>
            <div class="content"><slot name="action60text"></slot></div>
            <div class="aimage"><slot name="action60image"></slot></div>
            <div class="content"><slot name="action61text"></slot></div>
            <div class="aimage"><slot name="action61image"></slot></div>
            <div class="content"><slot name="action62text"></slot></div>
            <div class="aimage"><slot name="action62image"></slot></div>
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