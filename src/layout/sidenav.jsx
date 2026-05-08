import { Activity, User, Folder, Briefcase, Star, Phone, Settings } from 'lucide-react';

function Sidenav() {
    const navItems = [
        { icon: Activity, label: 'Dashboard', active: true },
        { icon: User, label: 'Profile', active: false },
        { icon: Folder, label: 'Projects', active: false },
        { icon: Briefcase, label: 'Experience', active: false },
        { icon: Star, label: 'Skills', active: false },
        { icon: Phone, label: 'Contact', active: false },
        { icon: Settings, label: 'Settings', active: false },
    ];

    return (
        <aside className="w-64 bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen p-4 shadow-xl relative">
            <nav className="space-y-2">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                item.active
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                            }`}
                        >
                            <Icon className="h-5 w-5" />
                            <span className="font-medium">{item.label}</span>
                        </div>
                    );
                })}
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
