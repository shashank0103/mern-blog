import { BrowserRouter,Routes,Route } from   "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import SignIn from "./pages/Signin"
import Projects from "./pages/Project"
import About from "./pages/about"
export default function App() {
  return (
   <BrowserRouter>
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
