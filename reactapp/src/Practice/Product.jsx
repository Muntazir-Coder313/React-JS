import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Eye } from "lucide-react";

function Product() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();

        if (isMounted) {
          setUsers(data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (error)
    return (
      <p className="text-red-500 text-center mt-10 font-semibold">
        {error}
      </p>
    );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading products...
      </div>
    );

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#e0f2fe] via-[#fdf4ff] to-[#fef9c3]">

      {/* HEADER */}
      <div className="text-center mb-14">

        <p className="text-sm tracking-[5px] text-purple-500 uppercase font-semibold">
          Our Store
        </p>

        <h1 className="text-5xl font-extrabold text-gray-800 mt-3">
          Premium Products
        </h1>

        <p className="text-gray-600 mt-4">
          High quality products at best prices
        </p>

      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {users.products?.map((u) => (

          <div
            key={u.id}
            onClick={() => handleCardClick(u.id)}
            className="group cursor-pointer bg-white/70 backdrop-blur-xl border border-white/40 rounded-[28px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 overflow-hidden"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={u.thumbnail}
                alt={u.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* STOCK */}
              <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
                {u.stock} left
              </div>

              {/* quick icons */}
              <div className="absolute top-3 left-3 flex gap-2">

                <div className="bg-white p-2 rounded-full shadow hover:bg-pink-500 hover:text-white transition">
                  <Eye size={16} />
                </div>

              </div>

            </div>

            {/* CONTENT */}
            <div className="p-5">

              {/* TITLE */}
              <h2 className="font-bold text-gray-800 text-lg truncate">
                {u.title}
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
                <Star size={16} fill="currentColor" />
                {u.rating}
              </div>

              {/* PRICE */}
              <p className="text-2xl font-extrabold text-purple-600 mt-2">
                ${u.price.toFixed(2)}
              </p>

              {/* BUTTON */}
              <button className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-105 transition shadow-lg">

                <ShoppingCart size={18} />
                Buy Now

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Product;