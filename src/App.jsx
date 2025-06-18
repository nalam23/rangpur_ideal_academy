import { BrowserRouter as Router} from "react-router-dom";
import TopBar from "./Component/TopBar"
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HomePage from "./Component/HomePage";


function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <Header></Header>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    
      
    
    </Router>
  );
}

export default App;