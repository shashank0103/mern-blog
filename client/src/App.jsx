import { BrowserRouter,Routes,Route } from   "react-router-dom"
import './index.css'; // ✅ This must be at the top of your file

import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/Signin"
import Projects from "./pages/Project"
import About from "./pages/about"
import Header from "./components/Header"
export default function App() {
  return (
   
   <BrowserRouter>
    <Header />
   <Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/about" element={<About />}/>
   <Route path="/sign-in" element={<SignIn />}/>
   <Route path="/sign-up" element={<SignUp />}/>
   <Route path="/dashboard" element={<Dashboard />}/>
   <Route path="/projects" element={<Projects />}/>
   </Routes>
   </BrowserRouter> 
 )
}
