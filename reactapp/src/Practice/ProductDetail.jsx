import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, Minus, Plus, ShoppingCart } from "lucide-react";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [mainImage, setMainImage] = useState("");
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Product not found");

        const data = await res.json();
        setProduct(data);
        setMainImage(data.thumbnail);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalPrice = product ? product.price * qty : 0;

  const handleOrder = () => {
    alert(
      `Order placed!\n\nName: ${form.name}\nProduct: ${product.title}\nTotal: $${totalPrice}`
    );
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center text-gray-600">
        Loading product...
      </div>
    );

  if (error)
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen px-6 py-14 bg-gradient-to-br from-[#e0f2fe] via-[#fdf4ff] to-[#fef9c3]">

      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link className="text-purple-600 hover:underline font-medium">
          ← Back
        </Link>

        {/* PRODUCT CARD */}
        <div className="mt-6 grid md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[30px] p-6">

          {/* IMAGE */}
          <div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg">

              <img
                src={mainImage}
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
                alt=""
              />

              {/* wishlist */}
              <button
                onClick={() => setWishlist(!wishlist)}
                className="absolute top-4 right-4 bg-white p-3 rounded-full shadow hover:bg-pink-500 hover:text-white transition"
              >
                <Heart
                  className={wishlist ? "text-pink-500" : ""}
                  size={18}
                />
              </button>

            </div>

            {/* thumbnails */}
            <div className="flex gap-3 mt-4">

              {product.images?.slice(0, 4).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className="w-20 h-20 object-cover rounded-xl cursor-pointer border hover:scale-110 transition"
                  alt=""
                />
              ))}

            </div>

          </div>

          {/* DETAILS */}
          <div>

            <h1 className="text-3xl font-extrabold text-gray-800">
              {product.title}
            </h1>

            <p className="text-gray-500 mt-3">
              {product.description}
            </p>

            {/* rating */}
            <div className="flex items-center gap-2 mt-3 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="text-gray-600">
                {product.rating}/5
              </span>
            </div>

            {/* price */}
            <div className="mt-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white p-5 rounded-2xl shadow-lg">
              <p className="text-3xl font-bold">
                ${product.price}
              </p>
              <p className="text-sm">
                {product.discountPercentage}% OFF
              </p>
            </div>

            {/* info */}
            <div className="mt-5 text-gray-600 space-y-1">
              <p><b>Brand:</b> {product.brand}</p>
              <p><b>Category:</b> {product.category}</p>
              <p><b>Stock:</b> {product.stock}</p>
            </div>

            {/* quantity */}
            <div className="flex items-center gap-4 mt-6">

              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center"
              >
                <Minus size={16} />
              </button>

              <span className="text-lg font-semibold">
                {qty}
              </span>

              <button
                onClick={() => setQty(qty + 1)}
                className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center"
              >
                <Plus size={16} />
              </button>

            </div>

            {/* buttons */}
            <div className="flex gap-4 mt-7">

              <button className="flex-1 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:scale-105 transition flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Add to Cart
              </button>

              <button className="flex-1 py-3 rounded-2xl bg-black text-white font-semibold hover:opacity-80 transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

        {/* CHECKOUT */}
        <div className="mt-10 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[30px] p-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Checkout Information
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Fill your details to place order
          </p>

          <div className="grid md:grid-cols-3 gap-4">

            <input
              name="name"
              onChange={handleChange}
              placeholder="Full Name"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              name="phone"
              onChange={handleChange}
              placeholder="Phone"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>

          <textarea
            name="address"
            onChange={handleChange}
            placeholder="Address"
            rows="3"
            className="w-full mt-4 border p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* total */}
          <div className="mt-6 flex justify-between items-center bg-gray-100 p-4 rounded-2xl">

            <p className="text-lg font-bold">
              Total: ${totalPrice}
            </p>

            <button
              onClick={handleOrder}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;