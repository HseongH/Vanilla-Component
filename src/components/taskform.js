export default class TaskForm extends HTMLElement {
  constructor(handleSubmit) {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
        <form id="add-list">
            <input type="text" />
        </form>
    `;

    this.form = this.shadow.querySelector("#add-list");
    this.handleSubmit = handleSubmit;
  }

  connectedCallback() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const input = this.form.querySelector("input");
      const value = input.value;

      if (value) {
        this.handleSubmit(value);
        input.value = "";
      }
    });
  }
}

customElements.define("task-form", TaskForm);
