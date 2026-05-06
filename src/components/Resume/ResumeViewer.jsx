import React from 'react';

const ResumeViewer = () => {
  return (
    <div style={{ 
      width: '100%', 
      margin: '0 auto',
      padding: '20px 0'
    }}>
      <div style={{
        textAlign: 'right',
        marginBottom: '10px',
        padding: '0 20px'
      }}>
        <a 
          href="/resume.pdf" 
          download="Samia_Serbouti_Resume.pdf"
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        >
          💾 Download PDF
        </a>
      </div>
      
      <object
        data="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
        style={{
          border: 'none',
          display: 'block'
        }}
      >
        <p>Your browser can't display PDFs. <a href="/resume.pdf">Download here</a></p>
      </object>
    </div>
  );
};

export default ResumeViewer;