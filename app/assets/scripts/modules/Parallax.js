class Parallax {
  constructor() {
    this.translate = document.querySelectorAll(".translate")
    this.events()
  }

  events() {
    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset
      this.parallax(scroll)
    })
  }

  parallax(scroll) {
    this.translate.forEach(element => {
      let speed = element.dataset.speed
      element.style.transform = `translateY(${scroll * speed}px)`
    })
  }
}

export default Parallax
