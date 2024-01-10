"use client";
import Main from "@/components/Main";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <main className="w-screen">
      <Main />
    </main>
  );
}