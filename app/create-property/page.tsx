"use client"
import PropertyForm from "@/Components/Create Property/CreateProperty";
import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/Layout/Navbar";
import Footer from "@/Components/Layout/Footer";
const page: React.FC = () => {
  const router =useRouter();
  const token=localStorage.getItem("token")
  if(!token){
    router.push('/log-in');
  }
  return <div className="flex flex-col gap-y-10">
    <Navbar />
    <PropertyForm />
    <Footer />
  </div>;
};
export default page;
