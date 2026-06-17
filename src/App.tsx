import {useLocation} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import { Toaster } from "react-hot-toast"
import LandingPage from "./pages/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";

const app = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/checkout' && <Navbar />}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<LandingPage/>}/>
                </Routes>
            </AnimatePresence>
            <Toaster/>
        </>
    )
}

export default app;