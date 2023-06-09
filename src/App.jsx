import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { CartContextProvider } from "./context/CartContext";
import { CartSidebar } from "./components/sidebar/CartSidebar";
function App() {
    return (
        <CartContextProvider>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
            <CartSidebar />
        </CartContextProvider>

    );
}

export default App;
