// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1 className='bg-purple-500'>
//       hello
//       hi
//       </h1>
//     </div>
//   )
// }

// export default App;


// import { Loader } from "lucide-react";

// const App = () => {
//   return (
//     <>
//       <div className="h-screen w-screen flex justify-center items-center bg-neutral-950">
//         <div className="h-3/6 w-[30%] flex justify-center items-center bg-white rounded-md shadow-2xl">
//           <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
//             <input type="text" name="" id="" placeholder="Name" className="p-3 bg-[#f1d731] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-300" />
//             <input type="text" name="" id="" placeholder="Email" className="p-3 bg-[#f1d731] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-300" />
//             <input type="number" name="" id="" placeholder="Phone" className="p-3 bg-[#f1d731] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-300" />
//             <input type="password" name="" id="" placeholder="Password" className="p-3 bg-[#f1d731] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-300" />
//             <button type="submit" className="w-full bg-cyan-400 text-black p-3"> <Loader  className="animate-spin"/>  Register</button>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }
// export default App;



// import Footer from "./components/Footer";
// import Navbar from "./components/NavBar";

// const App = () => {
//     const appname = "Footer Data"

//     const data = {
//         Appname: "M-A-X",
//         Appdata: "Inc"
//     }

//     return (
//         <>
//             <div className="h-screen w-screen flex flex-col justify-start items-center">
//                 <Navbar data={data} />
//                 {/* login */}
//                 <Footer appdata={appname} />
//             </div>

//         </>
//     )
// }

// export default App;



import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import WebLayout from "./layouts/WebLayout"
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path="/" element={<Profile />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App