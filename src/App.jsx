import { BrowserRouter as Router} from "react-router-dom";
import TopBar from "./Component/TopBar"
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HomePage from "./Component/HomePage";
import WelcomeSms from "./Component/WelcomeSms";


function App() {
  return (
    <Router>
      <Header></Header>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <WelcomeSms></WelcomeSms>
      <Footer></Footer>
    
      
    
    </Router>
  );
}

export default App;