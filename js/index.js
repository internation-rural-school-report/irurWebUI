// // create a class for tab
class TabMenu {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.menu
    this.components = document.querySelector(`.menu[data-menu="${this.data}"]`)
    this.tabComponent = new TabComponent(this.components)
    this.element.addEventListener("click", () => this.tabSelect())
  }
  tabSelect() {
    const components = document.querySelectorAll(".menu")
    Array.from(components).forEach(component => component.classList.remove('menu-selected'))
    this.element.classList.add("menu-selected")
    this.tabComponent.tabSelect()
    console.log("Do something!")
  }

}

class TabComponent {
  constructor(element) {
    this.element = element;
  }

  tabSelect() {
    const tabs = document.querySelectorAll('.menu')
    tabs.forEach(component => component.classList.remove('component-select'))
    this.element.classList.add('component-select')
    console.log("Do something!")
  }
}

let menus = document.querySelectorAll(".menu").forEach(menu => new TabMenu(menu))
