function Hero() {
  return (
    <section className="w-full bg-[#171717] text-white py-20 px-5 overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">

        {/* Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-orange-500/10 blur-3xl rounded-full"></div>

          <img
            className="relative w-full h-[350px] md:h-[460px] rounded-3xl object-cover shadow-2xl"
            src="/imags/images.jpg"
            alt="Shopping Products"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">

          <span className="inline-block text-orange-400 font-bold tracking-[4px] text-sm">
            YOUR STYLE. YOUR CHOICE.
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6">
            Everything You Love,
            <span className="text-orange-400"> In One Place.</span>
          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-6">
            Discover a world of amazing products.
            Shop your favorites, explore new collections,
            and enjoy a shopping experience made for you.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">

            <button className="px-9 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition duration-300 shadow-lg shadow-orange-500/20">
              Shop Now →
            </button>

            <button className="px-9 py-4 border border-white/20 hover:border-orange-400 hover:text-orange-400 rounded-full font-bold transition duration-300">
              Explore Collection
            </button>

          </div>
{/* 
          <p className="text-gray-500 text-sm mt-8">
            Quality Products • Great Prices • Easy Shopping
          </p> */}

        </div>

      </div>
    </section>
  );
}

export default Hero;