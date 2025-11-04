import React from "react";
import Header from "@/components/organisms/Header";
import CartSidebar from "@/components/organisms/CartSidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <CartSidebar />
    </div>
  );
};

export default Layout;