const personalProjectDescriptionTemplate = document.createElement('template');

personalProjectDescriptionTemplate.innerHTML = `

  <h2>Description</h2>
  <slot name="webpageImage"></slot>
  <p><slot name="description"></slot></p>
  <h4>Platform</h4>
  <p><slot name="platform"></slot></p>
  <h4>Language</h4>
  <p><slot name="languages"></slot></p>
  <h4>Tools</h4>
  <p><slot name="tools"></slot></p>
  <h4>TimeLine</h4>
  <p><slot name="timeline"></slot></p>
`;



class PersonalProjectDescription extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(personalProjectDescriptionTemplate.content);
      

    }
  

  }
  



  customElements.define('personalprojectdescription-component', PersonalProjectDescription);