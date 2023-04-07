import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import "./Styles/App.css";
import { useContextDentist } from "./Components/utils/global.context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { themeState } = useContextDentist();

  return (
    <div
      className="App"
      style={{ backgroundColor: themeState.bgColor, color: themeState.color }}
    >
      <ToastContainer />
      <Navbar />

      <Routes>
        <>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.dentist} element={<Detail />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
        </>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
