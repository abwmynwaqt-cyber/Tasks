
function Contact() {
  return (
    <section className="w-full bg-[#171717] text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold tracking-[4px] text-sm">
            GET IN TOUCH
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Contact <span className="text-orange-500">Us</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        {/* Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="w-full">
            <form action="" className="space-y-5">

              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#222] border border-white/10 rounded-lg py-3 px-4 text-white outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#222] border border-white/10 rounded-lg py-3 px-4 text-white outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#222] border border-white/10 rounded-lg py-3 px-4 text-white outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full bg-[#222] border border-white/10 rounded-lg py-3 px-4 text-white outline-none focus:border-orange-500 resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>

          {/* Map */}
          <div className="w-full min-h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d38483.95188502731!2d34.43818605971217!3d31.5095200979115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1793565683988!5m2!1sar!2s"
              className="w-full h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
