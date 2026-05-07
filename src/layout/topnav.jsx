function TopNav() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-linear-to-r from-slate-600 to-slate-800 shadow-lg">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-20 h-10 bg-linear-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                        Miracle
                    </span>
                </div>
            </div>
            {/* Username */}
            <div className="flex items-center gap-3">
                <span className="text-gray-200 font-medium text-sm sm:text-base">
                    Siva Geddada
                </span>
                <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <span className="text-white font-semibold text-sm">SG</span>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;
