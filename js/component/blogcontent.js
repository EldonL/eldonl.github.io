const blogContentTemplate = document.createElement('template');

blogContentTemplate.innerHTML = `
<style>

  .diarypostblocks .diarypostblock{
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
  
  .recentblog .show{
    color:red;
    font-size:3em;
    display: block;
  }

  .filterblog{
    display: none;
  }



  @media screen and (min-width: 1024px){
    .diarypostblocks .diarypostblock{
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


    <div class="recentblog">
      <button class="filterblog" onclick="OnLinkClick('https://www.youtube.com/watch?v=2eVfeaquPtg')">ONE</span>
      <button class="filterblog" onclick="OnLinkClick('https://www.youtube.com/watch?v=2eVfeaquPtg')">TWO</span>
      <button class="filterblog" onclick="OnLinkClick('https://www.youtube.com/watch?v=2eVfeaquPtg')">THREE</span>
      <button class="filterblog" onclick="OnLinkClick('https://www.youtube.com/watch?v=2eVfeaquPtg')">FOUR</span>
    </div>
</div>

`;



class BlogContent extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(blogContentTemplate.content);
      var elementsName, i;
      elementsName = this.shadowRoot.querySelectorAll(".filterblog");
      console.log(elementsName.length);
      var length = 3;
      if(length>elementsName.length)
      {
        length = elementsName.length;
      }
      for(i=0; i < length; i++){
        console.log(elementsName[i]);
        AddClass(elementsName[i], "show");
      }
    }
  

  }
  



 //show filtered elements
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

  customElements.define('blogcontent-component', BlogContent);