import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const ProductList = lazy(() => import("./pages/ProductList"));
const ConfirmOrder = lazy(() => import("./pages/confirmOrder"));
const OrderConfirmed = lazy(() => import("./pages/OrderConfirmed"));

const CheckoutPage = lazy(() => import("./pages/CheckOut"));
const Product_Detail = lazy(() => import("./pages/Product_Detail"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="cart"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProductList />
            </Suspense>
          }
        />

        <Route
          path="/products/product_detail/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Product_Detail />
            </Suspense>
          }
        />
        <Route
          path="checkout"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <CheckoutPage />
            </Suspense>
          }
        />
        <Route path="confirmOrder" element={<ConfirmOrder />} />
        <Route
          path="orderConfirmed"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <OrderConfirmed />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
