import Card from "components/addition/Card";
import Timer from "components/addition/Timer";

//style
import "../style/App.css";
import theme from "style/them";

//hook
import useRefreshAuthenticationPage from "hook/useRefreshPage/useRefreshAuthenticationPage";

function AboutPage() {
  //hook
  useRefreshAuthenticationPage();

  return (
    <div className={`${theme.setPage}`}>
      <p>AboutPage</p>
      <Timer/>
      <Card />
    </div>
  );
}

export default AboutPage;