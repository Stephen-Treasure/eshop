import "./App.css";

import ProductList from "./containers/ProductList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ProductPage from "./containers/ProductPage/ProductPage";
import SimpleSlider from "./components/Carousel/Carousel";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="App">
                            <h1>Mock Website </h1>
                            <SimpleSlider />
                            <ProductList />
                        </div>
                    }
                />
                <Route path="/products/:id" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
