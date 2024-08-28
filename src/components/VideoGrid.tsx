// components/VideoGrid.tsx

import React from 'react';
import styles from './styles/VideoGrid.module.css';

const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
  '/videos/video6.mp4',
  '/videos/video7.mp4',
  '/videos/video8.mp4',
  '/videos/video9.mp4',
  '/videos/video10.mp4',
  '/videos/video11.mp4',
  '/videos/video12.mp4',
];

export const VideoGrid: React.FC = () => {
  return (
    <div className={styles.gridContainer}>
      {videos.map((video, index) => (
        <div key={index} className={styles.videoWrapper}>
          <video
            src={video}
            className={styles.video}
            loop
            playsInline
            onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
            onMouseLeave={e => (e.currentTarget as HTMLVideoElement).pause()}
          />
        </div>
      ))}
    </div>
  );
};
