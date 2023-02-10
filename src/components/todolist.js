export default class TodoList extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
        <style>
          :host {
            display: block;
            border: 1px solid gray;
            padding: 16px;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            display: flex;
            align-items: center;
          }
          input[type="checkbox"] {
            margin-right: 8px;
          }
          .completed {
            text-decoration: line-through;
          }
        </style>
        <ul id="list"></ul>
      `;

    this.list = this.shadow.getElementById("list");
  }

  connectedCallback() {
    this.list.addEventListener("change", (event) => {
      const checkbox = event.target;
      const li = checkbox.closest("li");

      li.classList.toggle("completed");
    });
  }

  addTodo(text) {
    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" />
        <span>${text}</span>
      `;

    this.list.appendChild(li);
  }
}

customElements.define("todo-list", TodoList);
