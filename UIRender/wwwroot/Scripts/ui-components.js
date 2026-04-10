class UIComponent {
    id;
    cssClass;
    constructor(id, cssClass) {
        this.id = id;
        this.cssClass = cssClass;
    }
    render() {
        return 'div';
    }
    
    mount(containerId) {
        const container = document.getElementById(containerId);
        const element = document.createElement(this.render());
        element.id = this.id;
        container.appendChild(element);
    }
}


let component = new UIComponent('newComp', 'comp');
component.mount('app');