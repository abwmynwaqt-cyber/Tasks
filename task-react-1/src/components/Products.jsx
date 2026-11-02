
import { useState } from "react";

function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      name: "Perfume COCO",
      price: 55,
      image: "/imags/images (6).jpg",
      category: "Perfumes"
    },
    {
      name: "Perfume PAR",
      price: 85,
      image: "/imags/images (1).jpg",
      category: "Perfumes"
    },
    {
      name: "Perfume PARIS",
      price: 75,
      image: "/imags/006618016381_4.jpg",
      category: "Perfumes"
    },
    {
      name: "Men's watch",
      price: 45,
      image: "/imags/images (3).jpg",
      category: "Watches"
    },
    {
      name: "Men's watch",
      price: 77,
      image: "/imags/images (4).jpg",
      category: "Watches"
    },
    {
      name: "Men's watch",
      price: 95,
      image: "/imags/images (5).jpg",
      category: "Watches"
    }
  ];

  const filteredProducts = products.filter((product) => {
    return activeFilter === "All" || product.category === activeFilter;
  });

  return (
    <section className="w-full bg-[#171717] text-white py-20 px-5 overflow-hidden">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">
          Our Products
        </h2>

        <p className="text-gray-400 mt-3">
          Discover our latest collection
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 py-10">

        <button
          onClick={() => setActiveFilter("All")}
          className={`${activeFilter === "All" ? "bg-orange-500" : "border border-orange-500"} text-white px-6 py-3 rounded-full`}
        >
          All
        </button>

        <button
          onClick={() => setActiveFilter("Watches")}
          className={`${activeFilter === "Watches" ? "bg-orange-500" : "border border-orange-500"} text-white px-6 py-3 rounded-full`}
        >
          Watches
        </button>

        <button
          onClick={() => setActiveFilter("Perfumes")}
          className={`${activeFilter === "Perfumes" ? "bg-orange-500" : "border border-orange-500"} text-white px-6 py-3 rounded-full`}
        >
          Perfumes
        </button>

      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProducts.map((product) => (
          <div
            className="rounded-2xl overflow-hidden"
            key={product.name + product.price}
          >
            <img
              className="w-full h-80 object-cover hover:scale-105 transition duration-300"
              src={product.image}
              alt={product.name}
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-white">
                {product.name}
              </h3>

              <p className="text-lg font-semibold mt-2 text-orange-500">
                {product.price}$
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Products;
