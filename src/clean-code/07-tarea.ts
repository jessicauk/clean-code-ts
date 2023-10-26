(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  class InputElement {
    public attributes: InputAttributes;
    public events: InputEvents;
    public htmlElement: HtmlElement;

    constructor(value: string, placeholder: string, id: string) {
        this.attributes = new InputAttributes(value, placeholder)
        this.events = new InputEvents()
        this.htmlElement = new HtmlElement(id, "input")
    }
  }

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
