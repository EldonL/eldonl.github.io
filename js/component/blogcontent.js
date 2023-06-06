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

  .blogclass{
    padding-top:2em;
  }

  .blogclass .blogheader{
    display:flex;
    justify-content:space-between;
    font-size:1.1em;
    
  }


  
  .recentblog .filterblog:nth-child(n+4){
    display: none;
  }

  .recentblog{
    display:grid;
    justify-content:center;
  }


  .recentblog .filterblog .image{
    width:20em;
    height:20em;
    object-fit: cover;
    opacity:1;
    -webkit-transition: .4s ease-in-out;
    transition:.4s ease-in-out;
  }

  .recentblog .filterblog .image:hover{
     opacity:.5;
  }



  .recentblog .filterblog .imagetext{
    position:relative;
    text-align: center;
    bottom: 1.25em;
    font-size: 1.75em;
    color:white;
    font-weight: bold;
    text-shadow: 0.5px 0.5px #000000;
  }

  .recentblog .filterblog .bottom .title{
    position:relative;
    bottom:2em;
    text-align:center;
    font-size: 1.5em;
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

    <div class="blogclass">
        <div class="blogheader">
          <div class="blogheaderleft">Recent blogs</div>
          <a href="blog.html"><div class="blogheaderright">See all blogs</div></a>
        </div>
        <div class="recentblog">
          <div class="filterblog">
            <a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png" alt="cover image"></a>
            <div class="imagetext">Click to see more</div>
            <div class="bottom">
              <p class="title">Multiplayer on Meta Part1</p>
            </div>
          </div>
        

         
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