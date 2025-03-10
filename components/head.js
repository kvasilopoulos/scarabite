class HeadContent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        document.head.innerHTML += `
            <link rel="icon" href="resources/img/logo2.png" type="image/png">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <link rel="stylesheet" href="resources/css/main.css">
        `;
    }
}

customElements.define('head-content', HeadContent); 