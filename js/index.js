// // create a class for tab
class TabMenu {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.menu
    this.components = document.querySelector(`.component[data-menu="${this.data}"]`)
    this.tabComponent = new TabComponent(this.components)
    console.log("my task", this.components)
    this.element.addEventListener("click", () => this.tabSelect())
  }
  tabSelect() {
    const components = document.querySelectorAll(".menu")
    Array.from(components).forEach(component => component.classList.remove("menu-selected"))
    this.element.classList.add("menu-selected")
    this.tabComponent.tabSelect()
  }

}

class TabComponent {
  constructor(element) {
    this.element = element;
  }

  tabSelect() {
    const tabs = document.querySelectorAll('.component')
    tabs.forEach(component => component.classList.remove('component-select'))

    this.element.classList.toggle("component-select")
    console.log(this.element)
  
  }
}

let menus = document.querySelectorAll(".menu").forEach(menu => new TabMenu(menu))
