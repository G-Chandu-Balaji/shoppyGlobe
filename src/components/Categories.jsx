// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Categories.css";

// const CategorySection = () => {
//   const [categories, setCategories] = useState([]);
//   const [productsByCategory, setProductsByCategory] = useState({});

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("https://dummyjson.com/products/category-list");
//         const data = await res.json();
//         setCategories(data.slice(0, 6)); // Limit to 6 categories
//         console.log(data);
//       } catch (err) {
//         console.log("error", err.message);
//       }
//     };

//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchProductsForCategory = async (category) => {
//       try {
//         const res = await fetch(
//           `https://dummyjson.com/products/category/${category}`
//         );
//         if (res.ok) {
//           console.log("good");
//         }
//         const data = await res.json();

//         setProductsByCategory((prev) => ({
//           ...prev,
//           [category]: data.products,
//         }));
//       } catch (err) {
//         console.log("error", err.message);
//       }
//     };

//     categories.forEach((category) => {
//       fetchProductsForCategory(category);
//     });
//   }, [categories]);

//   return (
//     <div className="category-section">
//       <h2>Shop by Category</h2>
//       <div className="categories">
//         {categories.map((category) => (
//           <div className="category-block" key={category}>
//             <h3>{category}</h3>
//             <div className="products">
//               {productsByCategory[category]?.map((product) => (
//                 <Link
//                   to={`/product/${product.id}`}
//                   key={product.id}
//                   className="product-card"
//                 >
//                   <img src={product.thumbnail} alt={product.title} />
//                   <p>{product.title}</p>
//                   <span>${product.price}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/category-list");
      const data = await res.json();
      setCategories(data.slice(0, 6)); // Limit to 6 categories
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsForCategory = async (category) => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=4`
      );
      const data = await res.json();
      setProductsByCategory((prev) => ({ ...prev, [category]: data.products }));
    };

    categories.forEach((category) => {
      fetchProductsForCategory(category);
    });
  }, [categories]);

  return (
    <div className="category-section">
      <h2>Shop by Category</h2>
      <div className="categories">
        {categories.map((category) => (
          <div className="category-block" key={category}>
            <h3>{category}</h3>
            <div className="products-scroll">
              {productsByCategory[category]?.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="product-card"
                >
                  <img src={product.thumbnail} alt={product.title} />
                  <p>{product.title}</p>
                  <span>${product.price}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
