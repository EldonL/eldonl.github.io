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
                <p class="title">Multiplayer on Meta Part2</p>
            </div>
            </div>

        <div class="filterblog">
        <a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
                alt="cover image"></a>
        <div class="imagetext">Click to see more</div>
        <div class="bottom">
            <p class="title">Multiplayer on Meta Part3</p>
        </div>

    </div>


    <div class="filterblog">
    <a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
            alt="cover image"></a>
    <div class="imagetext">Click to see more</div>
    <div class="bottom">
        <p class="title">Multiplayer on Meta Part4</p>
    </div>

</div>


<div class="filterblog">
<a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
        alt="cover image"></a>
<div class="imagetext">Click to see more</div>
<div class="bottom">
    <p class="title">Multiplayer on Meta Part5</p>
</div>

</div>

<div class="filterblog" >
<a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
        alt="cover image"></a>
<div class="imagetext">Click to see more</div>
<div class="bottom">
    <p class="title">Multiplayer on Meta Part6</p>
</div>

</div>

<div class="filterblog">
<a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
        alt="cover image"></a>
<div class="imagetext">Click to see more</div>
<div class="bottom">
    <p class="title">Multiplayer on Meta Part7</p>
</div>

</div>

<div class="filterblog">
<a href="blogelemental.html"><img class="image" src="images_videos/blog/MultiPlayerPart1/coverimage.png"
        alt="cover image"></a>
<div class="imagetext">Click to see more</div>
<div class="bottom">
    <p class="title">Multiplayer on Meta Part8</p>
</div>

</div>
    <div class="viewmorebutton">
        <slot name="viewmorebutton"></slot>
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
  
function ViewAllBlog(){
    var elementsName, i;
    elementsName = this.shadowRoot.querySelectorAll(".filterblog");
    console.log(elementsName.length);
    for(i=0; i < elementsName.length; i++){       
            AddClass(elementsName[i], "show"); 
    }
}


function AddClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i =0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            
        }
    }
 }
  customElements.define('blogrecent-component', BlogRecent);