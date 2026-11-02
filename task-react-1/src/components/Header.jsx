const Header = () => {
return (
    <header className="bg-[#171717] text-white border-b border-white/10">

    <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-5">

        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-wide">
    My<span className="text-orange-500">Store.</span>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10">
        <li>
        <a href="#" className="text-orange-500 font-semibold">
        Home
            </a>
    </li>

    <li>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">
        Shop
            </a>
    </li>

    <li>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">
        Categories
            </a>
        </li>

        <li>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition duration-300">
        About Us
            </a>
    </li>
        </ul>

        {/* Contact */}
        <a
        href="#"
    className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-bold py-3 px-7 rounded-full"
        >
    Contact Us
        </a>

    </nav>
    </header>
);
};

export default Header;