const blogRecentTemplate = document.createElement('template');

blogRecentTemplate.innerHTML = `
<style>

  .container{
    padding-left:1em;
    padding-bottom:1em;
    padding-top:1em;
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




    


  }



</style>
<div class="container">
    <div class="blogclass">
        <div class="blogheader">
            <div class="blogheaderleft">
                <slot name="recentblogs"></slot>
            </div>
            <div class="blogheaderright">
                <slot name="seeallblogs"></slot>
            </div>

        </div>
        <div class="recentblog">
            <div class="filterblog">
                <a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
                        alt="cover image"></a>
                <div class="imagetext">Click to see more</div>
                <div class="bottom">
                    <p class="title">Multiplayer on Meta Part1</p>
                </div>

            </div>
        </div>
    </div>
</div>


`;


var shadowRoot;
class BlogRecent extends HTMLElement {
    constructor() {
      super();

      shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(blogRecentTemplate.content);
    }
  

  }
  



  customElements.define('blogrecent-component', BlogRecent);