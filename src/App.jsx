import Footer from "./components/footer";
import NavBar from "./components/Navbar";
import PersonnalDetails from "./components/personnalDetails";
import Path from "./pages/path";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Personnal from "./pages/personnal";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import FirstPage from "./components/firstPage";
import SecoundPage from "./components/secPage";



export default function App (){



  return(
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/personnal" element = {<Personnal/>}/>
          <Route path="/personnal/:id" element = {<PersonnalDetails/>}/>
          <Route path="/path" element = {<Path/>}>
          <Route path="firstPage" element ={<FirstPage/>} />
          <Route path="secPage" element ={<SecoundPage/>} />
          </Route>
          <Route path="*" element = {<NotFound/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}