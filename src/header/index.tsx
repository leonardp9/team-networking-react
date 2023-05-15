import { MainMenu } from "../menu/MainMenu";
import logo from "../selfie.jpg";
export default function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={logo} alt="Selfie" height="100" />
        </div>
        <div id="header-info">
          <h1>Leonard Popescu</h1>
          <h2 id="job-title">Programator Software</h2>
        </div>
      </div>
      <MainMenu />
    </header>
  );
}
