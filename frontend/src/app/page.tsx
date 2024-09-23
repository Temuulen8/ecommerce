"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import LogIn from "./(auth)/login/page";

export default function Home() {
  return (
    <div className="">
      <Header />
      <LogIn />
      <Footer />
    </div>
  );
}
