"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, offset: 60 });
  }, []);
  return null;
} 