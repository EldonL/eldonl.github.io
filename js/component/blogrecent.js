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
            <div class="blogcontent">
                <a href="blogfirstandroidgame7.html"><img class="image" src="images_videos/blog/FirstAndroidGame/enemycannon.PNG"
                    alt="cover image"></a>
                <div class="imagetext">Click to see more</div>
                <div class="bottom">
                    <p class="title">First Android Game - Part 7 - Photon Transform Classic View Investigation</p>
                </div>
            </div>
        </div>
        <div class="filterblog">
            <div class="blogcontent">
                <a href="blogfirstandroidgame6.html"><img class="image" src="images_videos/blog/FirstAndroidGame/explosion.PNG"
                    alt="cover image"></a>
                <div class="imagetext">Click to see more</div>
                <div class="bottom">
                    <p class="title">First Android Game - Part 6</p>
                </div>
            </div>
        </div>
        <div class="filterblog">
            <div class="blogcontent">
                <a href="blogfirstandroidgame5.html"><img class="image" src="images_videos/blog/FirstAndroidGame/coverimage2.PNG"
                    alt="cover image"></a>
                <div class="imagetext">Click to see more</div>
                <div class="bottom">
                    <p class="title">First Android Game - Part 5</p>
                </div>
            </div>
        </div>
        <div class="filterblog">
            <div class="blogcontent">
                <a href="blogfirstandroidgame4.html"><img class="image" src="images_videos/blog/FirstAndroidGame/photoncoverimage.PNG"
                    alt="cover image"></a>
                <div class="imagetext">Click to see more</div>
                <div class="bottom">
                    <p class="title">First Android Game - Part 4</p>
                </div>
            </div>
        </div>
        <div class="filterblog">
                <div class="blogcontent">
                    <a href="blogfirstandroidgame3.html"><img class="image" src="images_videos/blog/FirstAndroidGame/digibccareerfair.PNG"
                        alt="cover image"></a>
                    <div class="imagetext">Click to see more</div>
                    <div class="bottom">
                        <p class="title">First Android Game - Part 3 - Career Fair and Testers</p>
                    </div>
                </div>
            </div>
            <div class="filterblog">
                <div class="blogcontent">
                    <a href="blogfirstandroidgame2.html"><img class="image" src="images_videos/blog/FirstAndroidGame/mainmenufinal.PNG"
                        alt="cover image"></a>
                    <div class="imagetext">Click to see more</div>
                    <div class="bottom">
                        <p class="title">First Android Game - Part 2</p>
                    </div>
                </div>
            </div>
            <div class="filterblog">
                <div class="blogcontent">
                    <a href="blogfirstandroidgame.html"><img class="image" src="images_videos/blog/FirstAndroidGame/coverimage.png"
                        alt="cover image"></a>
                    <div class="imagetext">Click to see more</div>
                    <div class="bottom">
                        <p class="title">First Android Game - Part 1</p>
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
    if (!window.location.href.includes("eldonl.github.io/blog")) {//if main blog page
      shadowRoot.querySelector('link').setAttribute("href", "css/blogrecentmainpage.css");
      DefaultDisplayBlog(6);
    }
    else {//if blog projects page
      shadowRoot.querySelector('link').setAttribute("href", "css/blogrecentprojectpage.css");
    }

  }


}

function DefaultDisplayBlog(numBlogToShow){
    var elementsName, i;
    elementsName = this.shadowRoot.querySelectorAll(".filterblog");
    if(numBlogToShow>=elementsName.length){
        numBlogToShow = elementsName.length;
        viewMoreButton = document.getElementsByClassName("viewmorebutton");
        AddClass(viewMoreButton[0], "hide") 
    }
    for(i=0; i < numBlogToShow; i++){     
            AddClass(elementsName[i], "show"); 
    }
}
  
function ViewAllBlog(){
    var elementsName, i,viewMoreButton;
    elementsName = this.shadowRoot.querySelectorAll(".filterblog");
    viewMoreButton = document.getElementsByClassName("viewmorebutton");
    for(i=0; i < elementsName.length; i++){     
            AddClass(elementsName[i], "show");
    AddClass(viewMoreButton[0], "hide") 
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