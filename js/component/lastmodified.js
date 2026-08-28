const lastModifiedTemplate = document.createElement('template');

lastModifiedTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <style>
 

  </style>
  <section class="last-modified-section bg-js-controlled">


            <div class="lastModified">              
                    <p>last modified:</p>
                    <p id="last-modified"></p>
            </div>

    </section>
`;



class  LastModified extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      shadowRoot.appendChild(lastModifiedTemplate.content);
      let lastModifiedText = document.lastModified;
      this.shadowRoot.getElementById("last-modified").innerHTML = lastModifiedText;
    }

  }
  
customElements.define('last-modified-component', LastModified);


