// create a class for tab
class TabMenu {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.menu
    this.components = Array.from(this.components).map(component => new TabComponent(component))
    this.element.addEventListener("click", () => this.tabSelect())
  }
  tabSelect() {
    const components = document.querySelectorAll(".component")
    components.forEach(component => component.style.display = "none")
    this.element.classList.add(".menu")
    this.components.forEach(component => component.selectComponent())
  }

}

class TabComponent {
  constructor(element) {
    this.element = element;
  }

  selectComponent() {
    this.element.style.display = ".component"
  }
}

let menus = document.querySelectorAll(".menu")
menus.forEach(menu => new TabMenu(menu))
