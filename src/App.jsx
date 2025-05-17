import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Product_Detail from "./pages/Product_Detail";

import Layout from "./components/Layout";
import CheckoutPage from "./pages/CheckOut";
import ProductList from "./components/ProductList";
import ConfirmOrder from "./pages/confirmOrder";
import OrderConfirmed from "./pages/OrderConfirmed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<ProductList />} />

        <Route
          path="/products/product_detail/:id"
          element={<Product_Detail />}
        />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="confirmOrder" element={<ConfirmOrder />} />
        <Route path="orderConfirmed" element={<OrderConfirmed />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
