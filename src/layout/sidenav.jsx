function Sidenav() {
    const navItems = [
        { icon: '📊', label: 'Dashboard', active: true },
        { icon: '👤', label: 'Profile', active: false },
        { icon: '📁', label: 'Projects', active: false },
        { icon: '💼', label: 'Experience', active: false },
        { icon: '⭐', label: 'Skills', active: false },
        { icon: '📞', label: 'Contact', active: false },
        { icon: '⚙️', label: 'Settings', active: false },
    ];

    return (
        <aside className="w-64 bg-linear-to-r from-slate-700 to-slate-800 min-h-full p-4 shadow-xl">
            <nav className="space-y-2">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                            item.active
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                        }`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-4 left-4 right-4 p-4 border-t border-slate-700">
                <div className="text-xs text-gray-400 text-center">
                    <p>© 2026 Portfolio</p>
                </div>
            </div>
        </aside>
    );
}

export default Sidenav;
