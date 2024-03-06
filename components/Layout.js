import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
