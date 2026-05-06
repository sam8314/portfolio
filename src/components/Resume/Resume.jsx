import React, { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Auto-open PDF when component loads
    window.open('/Resume_Serbouti.pdf', '_blank');
  }, []);

  return (
    <section id="resume" className="section">
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <h2 className="section__title">Resume</h2>
        <p>Opening your resume in a new tab...</p>
        <p>
          If it doesn't open automatically, 
          <a href="/Resume_Serbouti.pdf" target="_blank" rel="noopener noreferrer"> click here</a>
        </p>
      </div>
    </section>
  );
};

export default Resume;