
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import Home from "./pages/Home";
import About from "./pages/About";
// import {Button} from './components/Button';

function App() {
  

  return (
    <>
    {/* hello world */}
    {/* <h1>Welcome to homepage</h1> */}
<Heading/>
{/* this comes by default */}
<BrowserRouter>
<Routes>
  <Route path="/jj" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
</BrowserRouter>
{/* <Button/>      */}
    </>
  )
}

export default App;
