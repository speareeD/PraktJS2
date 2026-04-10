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

let component = new UIComponent('container', 'container');
let component1 = new UIButton('js-button', 'btn', 'Click me!', 'green');

component.mount('app');
component1.mount('container');