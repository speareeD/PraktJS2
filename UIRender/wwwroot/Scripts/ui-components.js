class UIComponent {
    id;
    cssClass;
    element;

    constructor(id, cssClass) {
        this.id = id;
        this.cssClass = cssClass;
        this.element = document.createElement(this.render());
    }

    render() {
        return 'div';
    }

    mount(containerId) {
        const parent = typeof containerId === 'string'
            ? document.getElementById(containerId)
            : containerId;

        this.element.id = this.id;
        if (this.cssClass) this.element.classList.add(this.cssClass);

        parent.appendChild(this.element);
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

class UIPanel extends UIComponent {
    title;
    children;

    constructor(id, cssClass, title, children) {
        super(id, cssClass);
        this.title = title;
        this.children = children;
    }

    render() {
        return 'div';
    }

    mount(containerId) {
        super.mount(containerId);
        const panelTitle = document.createElement('h3');
        panelTitle.textContent = this.title;
        this.element.appendChild(panelTitle);
        for (const child of this.children) {
            child.mount(this.id);
        }
    }
}

class UIList extends UIComponent {
    items;

    constructor(id, cssClass, items = []) {
        super(id, cssClass);
        this.items = items;
    }

    render() {
        return 'ul';
    }

    mount(containerId) {
        super.mount(containerId);

        for (const itemData of this.items) {
            const li = document.createElement('li');

            if (itemData instanceof UIComponent) {
                itemData.mount(li);
            } else {
                li.innerHTML = itemData;
            }
            this.element.appendChild(li);
        }
    }
}

class UICard extends UIPanel {
    imageUrl;

    constructor(id, cssClass, title, children, imageUrl) {
        super(id, cssClass, title, children);
        this.imageUrl = imageUrl;
    }

    mount(containerId) {
        super.mount(containerId);
        const img = document.createElement('img');
        img.src = this.imageUrl;
        img.width = 300;
        this.element.appendChild(img);
    }
}


const panel = new UIPanel("p1", "panel", "Login Form", [
    new UIInput("login", "form-control-sm", "Name", "text"),
    new UIButton("btn1", "btn", "Register", "skyblue"),
    new UIButton("btn2", "btn", "Log In", "hotpink"),
    new UICard("card1", "card1", "Card",
        [new UIList('list1', "js-list", ['Name', 'Age', new UIList('list2', 'js-list', ['Height', 'Weight'])])],
        'https://i.pinimg.com/736x/78/bb/bb/78bbbbc56992ba01452f82419ca42ef7.jpg'),
]);
const addInputButton = new UIButton("add-input-btn", "btn", "Add input", "#4CAF50");

addInputButton.element.addEventListener("click", () => {
    let count = 0;
    const newInput = new UIInput(`input${count++}`, 'form-control', 'Put information here', 'text');
    newInput.mount('p1');
})

panel.mount('app');
addInputButton.mount('p1');

