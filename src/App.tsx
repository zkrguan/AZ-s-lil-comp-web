import "./App.css";
import BodyUI from "./components/ui/BodyUI/BodyUI";
import HeaderBar from "./components/assets/HeaderBar/HeaderBar";
import NavBarUI from "./components/ui/NavBarUI/NavBarUI";
import FooterUI from "./components/ui/FooterUI/FooterUI";


function App() {
  return (
    <div>
      <HeaderBar />
      <NavBarUI />
      <BodyUI />
      <FooterUI />
    </div>
  );
}

export default App;
