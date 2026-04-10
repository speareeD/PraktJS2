class UIComponent {
    id;
    cssClass;
    element = document.createElement(this.render());
    
    constructor(id, cssClass) {
        this.id = id;
        this.cssClass = cssClass;
    }
    render() {
        return 'div';
    }
    
    mount(containerId) {
        const container = document.getElementById(containerId);
        this.element.id = this.id;
        this.element.classList.add(this.cssClass);
        container.appendChild(this.element);
    }
}

class UIButton extends UIComponent {
    text;
    color;
    constructor(id, cssClass, text, color) {
        super(id, cssClass);
        this.text = text;
        this.color = color;
    }
    render() {
        return 'button';
    }
    mount(containerId) {
        super.mount(containerId);
        this.element.innerHTML = this.text;
        this.element.style.backgroundColor = this.color;
    }
}

class UIInput extends UIComponent {
    placeholder;
    type;
    constructor(id, cssClass, placeholder, type) {
        super(id, cssClass);
        this.placeholder = placeholder;
        this.type = type;
    }
    render() {
        return 'input';
    }
    mount(containerId) {
        super.mount(containerId);
        this.element.placeholder = this.placeholder;
        this.element.type = this.type;
    }
}

const container = new UIComponent('container', 'container');
const button = new UIButton('js-button', 'btn', 'Click me!', 'green');
const input = new UIInput('js-input', 'input', 'Enter your name', 'text');

container.mount('app');
button.mount('container');
input.mount('container');