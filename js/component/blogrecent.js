const blogRecentTemplate = document.createElement('template');

blogRecentTemplate.innerHTML = `

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

            <div class="filterblog">
            <a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
                    alt="cover image"></a>
            <div class="imagetext">Click to see more</div>
            <div class="bottom">
                <p class="title">Multiplayer on Meta Part1</p>
            </div>

        </div>

        <div class="filterblog">
        <a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
                alt="cover image"></a>
        <div class="imagetext">Click to see more</div>
        <div class="bottom">
            <p class="title">Multiplayer on Meta Part1</p>
        </div>

    </div>


    <div class="filterblog">
    <a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
            alt="cover image"></a>
    <div class="imagetext">Click to see more</div>
    <div class="bottom">
        <p class="title">Multiplayer on Meta Part1</p>
    </div>

</div>


<div class="filterblog">
<a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
        alt="cover image"></a>
<div class="imagetext">Click to see more</div>
<div class="bottom">
    <p class="title">Multiplayer on Meta Part1</p>
</div>

</div>

<div class="filterblog">
<a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
        alt="cover image"></a>
<div class="imagetext">Click to see more</div>
<div class="bottom">
    <p class="title">Multiplayer on Meta Part1</p>
</div>

</div>

<div class="filterblog">
<a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
        alt="cover image"></a>
<div class="imagetext">Click to see more</div>
<div class="bottom">
    <p class="title">Multiplayer on Meta Part1</p>
</div>

</div>

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


    const link = document.createElement('link');
    link.setAttribute("href", '');
    link.setAttribute("rel", "stylesheet");
    shadowRoot.appendChild(link)
    if (window.location.href.includes("eldonl.github.io/blog.html")) {//if main blog page
      shadowRoot.querySelector('link').setAttribute("href", "css/blogrecentmainpage.css")
    }
    else {//if blog projects page
      shadowRoot.querySelector('link').setAttribute("href", "css/blogrecentprojectpage.css")
    }

  }


}
  



  customElements.define('blogrecent-component', BlogRecent);