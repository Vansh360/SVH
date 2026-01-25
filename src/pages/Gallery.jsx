import React from "react";

import { useState } from "react";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519452630492-64a7a44b0f8e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1588072432836-7fb78b1d9d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=800&q=80",
  ];

  const [lightbox, setLightbox] = useState({ open: false, src: "" });

  function openLightbox(src) {
    setLightbox({ open: true, src });
  }

  function closeLightbox() {
    setLightbox({ open: false, src: "" });
  }

  return (
    <section>
      <div className="title">
        <h2>School Gallery</h2>
        <p>Campus, classrooms & student activities</p>
      </div>

      <div className="gallery">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={"gallery-" + i}
            onClick={() => openLightbox(img)}
          />
        ))}
      </div>

      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close-lightbox" onClick={closeLightbox}>
            ×
          </span>
          <img
            src={lightbox.src}
            alt="Full View"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
