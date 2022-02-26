import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import store from "./redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="" element={<ProductList />} />
            <Route path="/:id" element={<ProductDetail />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
