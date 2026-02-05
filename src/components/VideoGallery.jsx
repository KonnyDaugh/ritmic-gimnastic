import React from "react";
import { videos } from "../data/videos";
import './VideoGallery.css';

function VideoGallery() {
    return (
        <div className="card">
            <h2>Видео</h2>
            <div className="video-gallery" >
                {videos.map(video => (
                    <div key={video.id} className="video-item">
                        <h3>{video.title}</h3>
                        <video width="320" height="240" controls>
                            <source src={video.url} type="video/mp4" />
                            Ваш браузер не поддерживает видео
                        </video>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VideoGallery;