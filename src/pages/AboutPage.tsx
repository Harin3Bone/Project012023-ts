//style
import theme from "style/them"

//hook
import useRefreshPage from "hook/useRefreshPage";

function AboutPage() {
  //hook
  const {useRefreshAuthenticationPage} = useRefreshPage();

  useRefreshAuthenticationPage()

  return (
    <div className={`${theme.setPage}`}>
      AboutPage
    </div>
  )
}

export default AboutPage