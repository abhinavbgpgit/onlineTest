import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import TestLandingPage from "./pages/test/TestLandingPage";
import TestStart from "./pages/test/TestStart";
import Instrunctions from "./pages/test/Instrunctions";
import TestOnGo from "./pages/test/TestOnGo";
import TestFile from "./pages/test/TestFile";
import Result from "./pages/test/Result";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Footer from "./pages/Footer/Footer";
import RegistrationModal from "./pages/login/RegistrationModal";
import LoginModal from "./pages/login/LoginModal";

function App() {
  // const {isAuthenticated} = useSelector((state) => state.auth);
  // console.log(isAuthenticated);
  // const navigate = useNavigate();
  // useEffect(()=>
  // { 
  //   if (isAuthenticated===false) {
  //   navigate("/login");
  //     }
  //     else{
  //       navigate("/");
  //     }

  // },[isAuthenticated])
 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/testlandingpage" element={<TestLandingPage />} />
        <Route path="/test/:id" element={<TestStart />} />
        <Route path="/instrunctions" element={<Instrunctions />} />
        <Route path="/testongo/:id" element={<TestOnGo />} />
        <Route path="/testfile" element={<TestFile />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer/>
      <RegistrationModal/>
      <LoginModal/>
    </div>
  );
}

export default App;
