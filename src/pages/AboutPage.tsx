//style
import theme from "style/them"

//hook
import useRefreshAuthenticationPage from "hook/useRefreshPage/useRefreshAuthenticationPage";

//https://codepen.io/wikyware-net/pen/dyKPRxQ

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