const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:  #0a0a23;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      font-weight: 700;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><a id="oldLink" href="">About</a></li>
        <li><a id="oldLink2" href="">Work</a></li>
        <li><a id="oldLink3" href="">Contact</a></li>
      </ul>
    </nav>
  </header>
`;



class Footer extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      shadowRoot.appendChild(footerTemplate.content);
    }
  
    connectedCallback() {

      // var oldLink= this.shadowRoot.getElementById('oldLink');
      // console.log(oldLink);
      // var newLink= this.getAttribute('href');
      // console.log(newLink);
     // oldLink.href = newLink;
      // console.log(this.getAttributeNode);

      var class2= this.getElementsByClassName("aclass2");
      var class3= this.getElementsByClassName("aclass3");
      var oldLink2= this.shadowRoot.getElementById('oldLink2');
      var oldLink3= this.shadowRoot.getElementById('oldLink3');
      // console.log("class2:" + class2);
      // console.log("class3: " + class3);
      // console.log("oldLink2: " + oldLink2);
      // console.log("oldLink3: " + oldLink3);
      console.log("class2.href:" + class2[0].href);
      console.log("class3.href:" + class3[0].href);
      oldLink2.href=class2[0].href;
      oldLink3.href=class3[0].href;
      console.log(oldLink2.href);
      console.log(oldLink3.href);
      
    }

    // static get observedAttributes() { 
    //   return ['href']; 
    // }

    // attributeChangedCallback(name, oldValue, newValue) {
    //   console.log("name:" + name + " oldValue: " +oldValue + " newValue: " + newValue);
    //   var oldLink= this.shadowRoot.getElementById('oldLink');
    //   oldLink.href = newValue;
    // }
  }
  
customElements.define('footer-component', footer);


