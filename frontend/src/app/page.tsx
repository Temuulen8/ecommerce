"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import LogIn from "./(auth)/login/page";
import ForgetPassword from "./(auth)/forgetpass/email/page";

export default function Home() {
  return (
    <div className="">
      <Header />
      <ForgetPassword />
      <Footer />
    </div>
  );
}
