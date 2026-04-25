import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorStatus from "./pages/ErrorStatus";
import "./assets/tailwind.css";

function AppLayout() {
  return (
    <div id="app-container" className="bg-amber-50 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/pertemuan-5-fix/dashboard" replace />} />
            <Route path="/pertemuan-5-fix/dashboard" element={<Dashboard />} />
            <Route path="/pertemuan-5-fix/orders" element={<Orders />} />
            <Route path="/pertemuan-5-fix/customers" element={<Customers />} />
            <Route
              path="/pertemuan-5-fix/errors/400"
              element={
                <ErrorStatus
                  code="400"
                  description="Bad request. Periksa kembali data pesanan kopi sebelum diproses."
                  image="https://http.cat/400"
                />
              }
            />
            <Route
              path="/pertemuan-5-fix/errors/401"
              element={
                <ErrorStatus
                  code="401"
                  description="Unauthorized. Silakan login sebagai staff coffee shop."
                  image="https://http.cat/401"
                />
              }
            />
            <Route
              path="/pertemuan-5-fix/errors/403"
              element={
                <ErrorStatus
                  code="403"
                  description="Forbidden. Akun ini belum memiliki akses ke modul kasir."
                  image="https://http.cat/403"
                />
              }
            />
            <Route
              path="*"
              element={
                <ErrorStatus
                  code="404"
                  description="Halaman tidak ditemukan atau sudah dipindahkan. Kembali ke dashboard coffee shop."
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </React.StrictMode>
);