import "../styles/styles.css"
import "lazysizes"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import Parallax from "./modules/Parallax"

new Parallax()

if (module.hot) {
  module.hot.accept()
}
