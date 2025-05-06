import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

export default function Layout() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
      <Footer />
    </div>
  );
}
