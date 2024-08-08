import "./App.css";
import BodyUI from "./components/ui/BodyUI/BodyUI";
import HeaderBar from "./components/assets/HeaderBar/HeaderBar";
import NavBarUI from "./components/ui/NavBarUI/NavBarUI";


function App() {
  return (
    <div>
      <HeaderBar />
      <NavBarUI />
      <BodyUI />
    </div>
  );
}

export default App;
