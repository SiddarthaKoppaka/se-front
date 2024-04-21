import React from 'react';
import './tiktok.scss';

const TikTokVideos = () => {
    // Sample video data (placeholder)
    const videos = [
        { id: 1, title: 'Video 1', user: 'User 1', likes: 1000, comments: 500 },
        { id: 2, title: 'Video 2', user: 'User 2', likes: 2000, comments: 1000 },
        { id: 3, title: 'Video 3', user: 'User 3', likes: 3000, comments: 1500 },
        { id: 1, title: 'Video 1', user: 'User 1', likes: 1000, comments: 500 },
        { id: 2, title: 'Video 2', user: 'User 2', likes: 2000, comments: 1000 },
        { id: 3, title: 'Video 3', user: 'User 3', likes: 3000, comments: 1500 },
        // Add more video data as needed
    ];

    return (
        <div className="tiktok-videos">
            <h2>TikTok-like Videos</h2>
            <div className="video-grid">
                {videos.map((video) => (
                    <div key={video.id} className="video-item">
                        <div className="video-thumbnail"></div>
                        <div className="video-info">
                            <h3>{video.title}</h3>
                            <p>Uploaded by {video.user}</p>
                            <div className="video-stats">
                                <span>Likes: {video.likes}</span>
                                <span>Comments: {video.comments}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TikTokVideos;
