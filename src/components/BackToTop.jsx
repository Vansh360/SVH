import React from "react";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(document.documentElement.scrollTop > 350);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!show) return null;

  return (
    <button className="topBtn" onClick={goToTop}>
      ↑
    </button>
  );
}
