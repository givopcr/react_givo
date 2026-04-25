import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="dashboard-container">

            <PageHeader
                title="Coffee Shop Dashboard"
                breadcrumb={["Coffee Admin", "Overview"]}
            >
                <button id="add-button" className="bg-hijau text-white px-4 py-2 rounded-lg">
                    Add Promo Banner
                </button>
            </PageHeader>

            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">

                {/* Orders */}
                <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="orders-icon" className="bg-hijau rounded-full p-4">
                        <FaShoppingCart className="text-3xl text-white" />
                    </div>
                    <div id="orders-info" className="flex flex-col">
                        <span id="orders-count" className="text-2xl font-bold">312</span>
                        <span id="orders-text" className="text-gray-400">Coffee Orders Today</span>
                    </div>
                </div>

                {/* Delivered */}
                <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="delivered-icon" className="bg-biru rounded-full p-4">
                        <FaTruck className="text-3xl text-white" />
                    </div>
                    <div id="delivered-info" className="flex flex-col">
                        <span id="delivered-count" className="text-2xl font-bold">248</span>
                        <span id="delivered-text" className="text-gray-400">Cups Served</span>
                    </div>
                </div>

                {/* Canceled */}
                <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="canceled-icon" className="bg-merah rounded-full p-4">
                        <FaBan className="text-3xl text-white" />
                    </div>
                    <div id="canceled-info" className="flex flex-col">
                        <span id="canceled-count" className="text-2xl font-bold">21</span>
                        <span id="canceled-text" className="text-gray-400">Cancelled Orders</span>
                    </div>
                </div>

                {/* Revenue */}
                <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div id="revenue-icon" className="bg-kuning rounded-full p-4">
                        <FaDollarSign className="text-3xl text-white" />
                    </div>
                    <div id="revenue-info" className="flex flex-col">
                        <span id="revenue-amount" className="text-2xl font-bold">Rp 8.750.000</span>
                        <span id="revenue-text" className="text-gray-400">Daily Revenue</span>
                    </div>
                </div>

            </div>

            <div className="mt-6 grid gap-4 p-5 lg:grid-cols-3">
                <article className="rounded-lg bg-white p-4 shadow-md">
                    <h3 className="font-semibold text-gray-800">Best Seller</h3>
                    <p className="mt-2 text-gray-500">Iced Caramel Latte • 87 cup terjual hari ini.</p>
                </article>
                <article className="rounded-lg bg-white p-4 shadow-md">
                    <h3 className="font-semibold text-gray-800">Peak Hour</h3>
                    <p className="mt-2 text-gray-500">17:00 - 20:00 adalah jam paling ramai di coffee shop.</p>
                </article>
                <article className="rounded-lg bg-white p-4 shadow-md">
                    <h3 className="font-semibold text-gray-800">Stock Alert</h3>
                    <p className="mt-2 text-gray-500">Biji kopi arabika tersisa 12%, segera restock.</p>
                </article>
            </div>
        </div>
    );
}