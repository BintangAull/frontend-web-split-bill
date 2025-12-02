import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout.jsx";
import RedirectLogin from "./components/RedirectLogin.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
       <Routes>
           <Route element={<Layout/>}>
               <Route path="/" element={<RedirectLogin/>}/>
               <Route path="/register" element={<UserRegister/>}/>
               <Route path="/login" element={<UserLogin/>}/>
           </Route>

           <Route path="/dashboard" element={<div>apa gitu</div>}>

           </Route>
       </Routes>
   </BrowserRouter>
  </StrictMode>,
)
