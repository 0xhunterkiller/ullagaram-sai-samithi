import React, { useState } from 'react';
import SingleAnnouncement from './SingleAnnouncement';
import Modal from './Modal';
import './Announcements.css';

function Announcements() {
  const [selectedContent, setSelectedContent] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const announcements = [
    { title: 'Announcement 1: Special Event this Saturday!', content: 'Full details about the special event...', id: 1 },
    { title: 'Announcement 2: New Program Starting Next Month', content: 'Details about the new program starting...', id: 2 },
    { title: 'Announcement 3: Community Meeting Scheduled', content: 'Full details about the community meeting...', id: 3 },
    { title: 'Announcement 3: Community Meeting Scheduled', content: 'Full details about the community meeting...', id: 4 },
    { title: 'Announcement 3: Community Meeting Scheduled', content: 'Full details about the community meeting...', id: 5 },
    { title: 'Announcement 3: Community Meeting Scheduled', content: 'Full details about the community meeting...', id: 6 },
    { title: 'Announcement 3: Community Meeting Scheduled', content: 'Full details about the community meeting...', id: 7 },
    { title: 'Announcement 3: Community Meeting Scheduled', content: 'Full details about the community meeting...', id: 8 },
    { title: 'Announcement 3: Community Meeting Scheduled', content: 'Full details about the community meeting...', id: 9 },
    // Add more announcements as needed
  ];

  const handleAnnouncementClick = (content) => {
    setSelectedContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedContent('');
  };

  return (
    <section className="announcements-section vertical-scroll">
      <h2>News and Announcements</h2>
      <div>
        {announcements.map((announcement) => (
          <SingleAnnouncement
            key={announcement.id}
            title={announcement.title}
            onClick={() => handleAnnouncementClick(announcement.content)}
          />
        ))}
      </div>
      <Modal show={isModalOpen} content={selectedContent} onClose={handleCloseModal} />
    </section>
  );
}

export default Announcements;
