import { BrowserRouter as Router} from "react-router-dom";
import TopBar from "./Component/TopBar"
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Slider from "./Component/Slider";


function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <Header></Header>
      <Navbar></Navbar>
     <Slider></Slider>
      
    
    </Router>
  );
}

export default App;