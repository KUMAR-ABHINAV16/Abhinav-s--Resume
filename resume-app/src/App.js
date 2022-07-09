
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import TechStack from "./components/TechStack/TechStack";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
  

//Protfolio website

//1.navbar
//2.homepage
//3.tech stack
//4. experience
//5.projects

function App() {
  return (
    
   <div className="app">
    <Navbar />
    <Homepage />
    <TechStack/>
    <Experience/>
    <Projects/>
   </div>
   
  );
}


export default App;