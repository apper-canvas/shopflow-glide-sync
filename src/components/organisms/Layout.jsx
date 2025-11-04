import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/hooks/useCart";
import Header from "@/components/organisms/Header";
import CartSidebar from "@/components/organisms/CartSidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <CartProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </main>
          <CartSidebar />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 9999 }}
        />
      </CartProvider>
    </div>
  );
};

export default Layout;