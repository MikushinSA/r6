import react.FC
import react.Props
import react.create
import react.dom.html.ReactHTML.div
import react.router.Route
import react.router.Routes
import react.router.dom.BrowserRouter

val App = FC<Props>("App") {
    BrowserRouter {
        div {
            Routes {
                Route {
                    path = "/"
                    element = CCourseList.create()
                }
            }
        }
    }
}
