import React from "react";
import { galleryImages } from "../data/gallery";
import './Gallery.css'; 

function Gallery() {
    return (
        <div>
            <h2>Фотогалерея</h2>
            <div className="gallery" >
                {galleryImages.map(img => (
                    <div key={img.id} className="gallery-item">
                        <img src={img.url} alt={img.caption} width={150} />
                        <p>{img.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;