import React, { useState, useEffect } from 'react';
import annstyle from './../styles/Announcements.module.css';

const announcements = [
  { text: "Tentative Summer 2024 Term End Theory Time Table!", url: "https://xaviertech.ac.in/images/Tentative%20Summer%202024%20Term%20End%20Theory%20Time%20Table.pdf" },
  { text: "Notice for Examination Form Filling Summer 2024.", url: "https://xaviertech.ac.in/images/034%20Notice%20for%20Examination%20Form%20Filling%20Summer%202024.pdf" },
  { text: "Notice for revaluation Winter 2023", url: "https://xaviertech.ac.in/images/Notice%20for%20revaluation%20Winter%202023.pdf" }
];

const AnnouncementBar = () => {
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

export default AnnouncementBar;