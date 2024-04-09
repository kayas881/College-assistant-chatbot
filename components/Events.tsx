import React, { useState, useEffect } from 'react';
import annstyle from './../styles/Announcements.module.css';

const announcements = [
  { text: "Annual Day - Manthan 2024", url: "#" },
];

const EventBar = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 3000); // Change announcement every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const words = announcements[currentAnnouncement].text.split(" "); // Split the current announcement into words

  return (
    <div key={currentAnnouncement} className={annstyle.announcementContainer}>
      <a href={announcements[currentAnnouncement].url} className={annstyle.announcementText}>
        {words.map((word, index) => (
          <span key={index}>
            {word}
            {(index + 1) % 5 === 0 && <br />} {/* Add a line break after every 4th word */}
          </span>
        ))}
      </a>
    </div>
  );
};

export default EventBar;