import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./compononents/TopBar";
import Books from "./compononents/AllTheBooks";
import FooterComponent from "./compononents/MyFooter";

function App() {
  return (
    <>
      <TopBar title="Biblioteca" claim="libreria di Frank" />
      <FooterComponent />

      <h1 className="m-4 text-white">FANTASY</h1>

      <Books />
    </>
  );
}

export default App;
