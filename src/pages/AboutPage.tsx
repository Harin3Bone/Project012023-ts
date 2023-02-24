//style
import theme from "style/them"

//hook
import useRefreshAuthenticationPage from "hook/useRefreshPage/useRefreshAuthenticationPage";

function AboutPage() {
  //hook
  useRefreshAuthenticationPage()

  return (
    <div className={`${theme.setPage}`}>
      AboutPage
    </div>
  )
}

export default AboutPage