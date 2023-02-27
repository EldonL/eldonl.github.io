const personalProjectStarTemplate = document.createElement('template');

personalProjectStarTemplate.innerHTML = `
<h2>Situation</h2>
<p><slot name="situation"></slot></p>
<h2>Task</h2>
<p><slot name="task"></slot></p>
<h2>Action</h2>
<p><slot name="action1text"></slot></p>
<p><slot name="action1image"></slot></p>
<p><slot name="action2text"></slot></p>
<p><slot name="action2image"></slot></p>
<p><slot name="action3text"></slot></p>
<p><slot name="action3image"></slot></p>
<h2>Result</h2>
<p><slot name="result1text"></slot></p>
<p><slot name="result1image"></slot></p>
<p><slot name="result2text"></slot></p>
<p><slot name="result2image"></slot></p>
<p><slot name="result3text"></slot></p>
<p><slot name="result3image"></slot></p>
`;



class PersonalProjectStar extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(personalProjectStarTemplate.content);
      

    }
  

  }
  



  customElements.define('personalprojectstar-component', PersonalProjectStar);