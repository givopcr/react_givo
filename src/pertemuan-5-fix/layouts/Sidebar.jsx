import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUsers, FaPlus, FaExclamationTriangle } from "react-icons/fa";

export default function Sidebar() {
    const menuClass = ({ isActive }) =>
        `flex items-center cursor-pointer rounded-xl p-4 font-medium transition ${isActive
            ? "bg-green-200 text-hijau font-extrabold"
            : "text-gray-600 hover:bg-green-200 hover:text-hijau hover:font-extrabold"
        }`;

    return (
        <div id="sidebar" className="flex min-h-screen w-[360px] flex-col bg-white p-10 shadow-lg border-r border-amber-100">

            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
                    KopiKita <b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">
                    Coffee Shop Admin Dashboard
                </span>
            </div>

            {/* Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">

                    <li>
                        <NavLink to="/pertemuan-5-fix/dashboard" id="menu-1" className={menuClass}>
                            <FaHome className="mr-4 text-xl" />
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/pertemuan-5-fix/orders" id="menu-2" className={menuClass}>
                            <FaShoppingCart className="mr-4 text-xl" />
                            Orders
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/pertemuan-5-fix/customers" id="menu-3" className={menuClass}>
                            <FaUsers className="mr-4 text-xl" />
                            Customers
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/pertemuan-5-fix/errors/400" id="menu-4" className={menuClass}>
                            <FaExclamationTriangle className="mr-4 text-xl" />
                            Error 400
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/pertemuan-5-fix/errors/401" id="menu-5" className={menuClass}>
                            <FaExclamationTriangle className="mr-4 text-xl" />
                            Error 401
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/pertemuan-5-fix/errors/403" id="menu-6" className={menuClass}>
                            <FaExclamationTriangle className="mr-4 text-xl" />
                            Error 403
                        </NavLink>
                    </li>

                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">

                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center justify-between">

                    <div id="footer-text" className="text-white text-sm">
                        <span>Kelola menu coffee bar dari panel ini.</span>

                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <FaPlus />
                            <span className="text-gray-600 flex items-center">Add Coffee Menu</span>
                        </div>
                    </div>

                    <img id="footer-avatar" src="https://avatar.iran.liara.run/public/28" className="w-20 rounded-full" />
                </div>

                <span id="footer-brand" className="font-bold text-gray-400">
                    KopiKita Coffee Shop Admin Dashboard
                </span>

                <p id="footer-copyright" className="font-light text-gray-400">
                    © 2025 All Right Reserved
                </p>
            </div>

        </div>
    );
}