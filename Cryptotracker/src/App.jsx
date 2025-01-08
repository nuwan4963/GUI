import NavigationBar from "./Navigationbar/NavigationBar.jsx";
import './App.css';
import { PortfolioSection } from "./PortfolioSection/PortfolioSection.jsx";
import { FirstSection } from "./Firstsection/FirstSection.jsx";
//import { SocialLinks } from "./SocialLinks/SocialLinks.jsx";




function App(){
  return(
    <>   
    <NavigationBar/>   
    <PortfolioSection/>
    <FirstSection/> 
    {/* <SocialLinks/> */}
   
    
    </>   

  );

}
export default App