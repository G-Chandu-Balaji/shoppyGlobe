# ShoppyGlobe E-commerce Application

**ShoppyGlobe** is a modern, responsive e-commerce application built with React, Redux, and React Router. It provides users with a seamless shopping experience, allowing them to browse products, view detailed information, add items to their cart, and proceed to checkout.

---

## 📌 Project Overview

**ShoppyGlobe** aims to simulate a real-world e-commerce platform with the following features:

- **Product Listings**: Display a list of products fetched from an external API.
- **Product Details**: View detailed information about a selected product.
- **Shopping Cart**: Add products to the cart, modify quantities, or remove items.
- **Checkout**: Placeholder for future payment integration.
- **ConfirmOrder**: Can cancel or proceed to place the confirm order to the shipping details provided.
- **Routing**: Navigate between pages using React Router.

---

## 🚀 Features

- **Product Search**: Filter products by name or category.
- **Sort Products**: products are sorted by price,rating.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **State Management**: Utilizes Redux for managing cart state.
- **Error Handling**: Graceful handling of API errors and loading states.
- **Code Splitting**: Implemented lazy loading for components to improve performance.

---

## 🛠️ Technologies Used

- **Frontend**:

  - React
  - Redux
  - React Router
  - React icons
  - React hook-form
  - React.lazy & Suspense (for code splitting)
  - CSS (for styling)

- **Development Tools**:

  - Node.js
  - npm or yarn
  - Visual Studio Code (or any preferred code editor)

---

## 📁 Project Structure

```
shoppy-globe/
├── public/
│   └── ...
├── src/
│   ├── utils/
│   │   ├──appstore.js
│   │   ├──cartSlice.js
│   │   └── useFetch.js
│   ├── components/
│   │   ├── cartItem.jsx
│   │   ├── Catergories.jsx
│   │   ├── EmptyCart.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── QuantityButton.jsx
│   │   ├── StarRating.jsx
│   │   ├── ErrorElement.jsx
│   │   ├── ProductNotFound.jsx
│   │   └── ... css files for each component
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── CheckOut.jsx
│   │   ├── confirmOrder.jsx
│   │   ├── OrderConfirm.jsx
│   │   ├── Product_Detail.jsx
│   │   ├── NotFound.jsx
│   │   └── ... css files for each page
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

---

## 🧪 Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/G-Chandu-Balaji/shoppyGlobe.git
cd shoppyGlobe
```

### 2. Install Dependencies

```
npm install
# or
yarn install
```

### 3. Start the Development Server

```
npm start
# or
yarn start
```

The application should now be running at `http://localhost:3000`.

---

## 🧩 How to Use

1. **Browse Products**: Navigate to the homepage to view a list of products.
2. **View Product Details**: Click on a product to see more information.
3. **Add to Cart**: Click the "Add to Cart" button on a product to add it to your shopping cart.
4. **View Cart**: Click on the cart icon in the header to view your cart.
5. **Modify Cart**: In the cart, you can adjust quantities or remove items.
6. **Checkout**: Proceed to the checkout page (currently a placeholder).

---

## 🧩 Features Implemented

- **Product Fetching**: Products are fetched from `https://dummyjson.com/products`
- **Redux State Management**: Actions and reducers manage the cart state.
- **Routing**: React Router is used for navigation between pages.
- **Code Splitting**: Components are lazily loaded using `React.lazy` and `Suspense`.
- **Responsive Design**: CSS media queries ensure the application is mobile-friendly.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your proposed changes.

---

## 📬 Contact

For any questions or feedback, please reach out to me at [balaji5220771.@gmail.com](mailto:balaji5220771.gmail.com).

---
